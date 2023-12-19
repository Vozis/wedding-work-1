'use client';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { IGetGuestInfo } from '@/components/form/form.types';
import Button from '@/components/buttons/main-button';
import { InputField } from '@/components/form/inputs/input';
import Description from '@/components/typography/description';
import { ReactSelectField } from '@/components/form/inputs/react-select';
import { alcoholItems } from '@/libs/alohol';
import { foodItems } from '@/libs/food';
import { RadioField } from '@/components/form/inputs/radio';
import { SelectField } from '@/components/form/inputs/select';
import dynamic from 'next/dynamic';
import cn from 'clsx';
import axios from 'axios';
import SentBlock from '@/components/form/sent-block';
import { useElementSize } from 'usehooks-ts';
import useResizeObserver from 'use-resize-observer';
import FormLoader from '@/components/loaders/form-loader';
import { AnimatePresence, motion, Variants } from 'framer-motion';

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {}

const variants: Variants = {
  out: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.5,
    },
  },
  in: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export function Form(props: FormProps) {
  const [isSent, setIsSent] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { ref, width, height } = useResizeObserver<HTMLDivElement>();

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
    try {
      setIsLoading(true);
      await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setIsSent(true);
      setIsLoading(false);
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      className={cn('flex w-full flex-col gap-6 lg:w-96', props.className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key={'loader'}
            variants={variants}
            animate="in"
            initial="out"
            exit="out"
          >
            <FormLoader
              style={{
                height: `${height}px`,
                width: `${width}px`,
              }}
            />
          </motion.div>
        ) : isSent ? (
          <motion.div
            key={'sent'}
            variants={variants}
            animate="in"
            initial="out"
            exit="out"
          >
            <SentBlock
              style={{
                height: `${height}px`,
                width: `${width}px`,
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            variants={variants}
            animate="in"
            initial="out"
            exit="out"
            key={'formBody'}
            ref={ref}
            className={cn('flex w-full flex-col gap-6')}
          >
            <Description>
              Пожалуйста, Скажите нам, готовы вы прийти и что будете из меню
            </Description>
            <div className={'flex flex-col gap-5'}>
              <div className={'flex items-start gap-3 '}>
                <span className={'w-6 text-5xl'}>1.</span>
                <InputField
                  {...register('name', { required: 'Без этого никак' })}
                  label={'Представьтесь, пожалуйста'}
                  placeholder={'Кокорин Евгеша'}
                  error={errors.name}
                />
              </div>
              <div className={'flex items-start gap-3 '}>
                <span className={'w-6 text-5xl'}>2.</span>
                <div className={'w-full'}>
                  <p className={'text-xl'}>Подтвердите свое участие</p>
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
            <Button type={'submit'} className={'w-64 self-center'}>
              Отправить информацию
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

export default Form;
