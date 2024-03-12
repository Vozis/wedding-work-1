'use client';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import React, { useEffect, useState, Fragment, useRef } from 'react';
import { IGetGuestInfo } from '@/components/form/form.types';
import Button from '@/components/buttons/main-button';
import { InputField } from '@/components/form/inputs/input';
import Description from '@/components/typography/description';
import { ReactSelectField } from '@/components/form/inputs/react-select';
import { alcoholItems } from '@/libs/alohol';
import { foodItems } from '@/libs/food';
import { RadioField } from '@/components/form/inputs/radio';
import cn from 'clsx';
import SentBlock from '@/components/form/sent-block';
import useResizeObserver from 'use-resize-observer';
import FormLoader from '@/components/loaders/form-loader';
import { AnimatePresence, motion, Variants } from 'framer-motion';

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {}

const variants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 2,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      // delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 2,
    },
  },
};

export function Form(props: FormProps) {
  const [isSent, setIsSent] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const { ref, width, height } = useResizeObserver<HTMLFormElement>();
  const ref = useRef<HTMLFormElement>(null);
  const [{ height, width }, setSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });
  const [{ currHeight, currWidth }, setCurrSize] = useState<{
    currWidth: number | undefined;
    currHeight: number | undefined;
  }>({
    currWidth: undefined,
    currHeight: undefined,
  });

  useResizeObserver({
    ref,
    onResize: setSize,
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IGetGuestInfo>({
    defaultValues: {
      confirmation: 'true',
      foodTaste: 'Мясо',
      alcoholTaste: ['Шампанское', 'Белое вино'],
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSent(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isSent]);

  const onSubmit: SubmitHandler<IGetGuestInfo> = async data => {
    setCurrSize({
      currHeight: height,
      currWidth: width,
    });
    try {
      setIsLoading(true);
      await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setTimeout(() => {
        setIsSent(true);
        setIsLoading(false);
      }, 3000);
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      style={{
        height: `${currHeight}px`,
        width: `${currWidth}px`,
      }}
      className={cn('', props.className)}
    >
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className={'basis-full'}
            key={'loading'}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.7,
              },
            }}
            initial={{
              opacity: 0,
              x: -50,
            }}
            exit={{
              opacity: 0,
              x: 50,
            }}
            transition={{
              duration: 0.7,
              type: 'spring',
            }}
          >
            <FormLoader
              style={{
                height: `${currHeight}px`,
                width: `${currWidth}px`,
              }}
            />
          </motion.div>
        ) : isSent ? (
          <motion.div
            className={'basis-full'}
            key={'sender'}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.7,
              },
            }}
            initial={{
              opacity: 0,
              x: -50,
            }}
            exit={{
              opacity: 0,
              x: 50,
            }}
            transition={{
              duration: 0.7,
              type: 'spring',
            }}
          >
            <SentBlock
              style={{
                height: `${currHeight}px`,
                width: `${currWidth}px`,
              }}
            />
          </motion.div>
        ) : (
          <motion.form
            key={'form'}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.7,
              },
            }}
            initial={{
              opacity: 0,
              x: -50,
            }}
            exit={{
              opacity: 0,
              x: 50,
            }}
            transition={{
              duration: 0.7,
              type: 'spring',
            }}
            ref={ref}
            className={cn('flex w-full basis-full flex-col gap-6')}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Description>
              Пожалуйста, сообщите нам, готовы ли вы прийти и что будете из
              меню:
            </Description>
            <div className={'flex flex-col gap-5'}>
              <div className={'flex items-start gap-3 '}>
                <span className={'w-6 text-5xl'}>1.</span>
                <InputField
                  {...register('name', { required: 'Без этого никак' })}
                  label={'Представьтесь, пожалуйста'}
                  placeholder={'Введите фамилию и имя...'}
                  error={errors.name}
                />
              </div>
              <div className={'flex items-start gap-3 '}>
                <span className={'w-6 text-5xl'}>2.</span>
                <div className={'w-full'}>
                  <p className={'text-2xl'}>Подтвердите свое участие</p>
                  <div className={'grid grid-cols-2 gap-2 p-2'}>
                    <RadioField
                      {...register('confirmation', {
                        required: 'Без этого никак',
                      })}
                      label={'Да'}
                      value={'true'}
                    />
                    <RadioField
                      {...register('confirmation', {
                        required: 'Без этого никак',
                      })}
                      label={'Нет'}
                      value={'false'}
                    />
                  </div>
                </div>
              </div>

              <div className={'flex items-start gap-3'}>
                <span className={'w-6 text-5xl'}>3.</span>
                <Controller
                  name={'foodTaste'}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <ReactSelectField
                      label={'Вкусовые предпочтения'}
                      options={foodItems || []}
                      field={field}
                      placeholder={' '}
                      isMulti={false}
                      error={error}
                      isClearable={false}
                      closeMenuOnSelect={true}
                    />
                  )}
                />
              </div>
              <div className={'flex items-start gap-3'}>
                <span className={'w-6 text-5xl'}>4.</span>
                <Controller
                  name={'alcoholTaste'}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <ReactSelectField
                      isClearable={true}
                      label={'Алкогольные предпочтения'}
                      options={alcoholItems || []}
                      field={field}
                      placeholder={' '}
                      isMulti={true}
                      error={error}
                      closeMenuOnSelect={false}
                    />
                  )}
                />
              </div>
            </div>
            <Description>
              Наш праздник имеет формат 18+, поэтому просим заранее
              предусмотреть с кем останутся ваши детки, пока вы будете отдыхать
              на празднике
            </Description>
            <Button
              type={'submit'}
              className={'w-64 self-center text-xl'}
              // onClick={() => setSaveSizes(true)}
              // onClick={() => resizeHandler()}
            >
              Отправить информацию
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Form;
