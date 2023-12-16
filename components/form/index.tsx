'use client';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import React, { useState } from 'react';

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

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {}

export function Form(props: FormProps) {
  const [showFormReset, setShowFormReset] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IGetGuestInfo>({
    defaultValues: {
      confirmation: 'true',
      foodTaste: ['Мясо'],
      alcoholTaste: ['Шампанское', 'Белое вино'],
    },
  });

  const onSubmit: SubmitHandler<IGetGuestInfo> = async data => {
    console.log(data);
  };

  return (
    <form
      className={cn('flex flex-col gap-6', props.className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Description>
        Пожалуйста, Скажите нам, готовы вы прийти и что будете из меню
      </Description>
      <div className={'flex flex-col gap-5'}>
        <div className={'flex items-start gap-3'}>
          <span className={'w-6 text-5xl'}>1.</span>
          <InputField
            {...register('name', { required: 'Без этого никак' })}
            label={'Представьтесь, пожалуйста'}
            placeholder={'Кокорин Евгеша'}
            error={errors.name}
          />
        </div>
        <div className={'flex items-start gap-3 '}>
          <span className={'w-6  text-5xl'}>2.</span>
          <div>
            <p className={'text-xl'}>Подтвердите свое участие</p>
            <div className={'grid grid-cols-2 gap-2 p-2'}>
              <RadioField
                {...register('confirmation', { required: 'Без этого никак' })}
                label={'Да'}
                value={'true'}
              />
              <RadioField
                {...register('confirmation', { required: 'Без этого никак' })}
                label={'Нет'}
                value={'false'}
              />
            </div>
          </div>
        </div>

        <div className={'flex max-w-[320px] items-start gap-3'}>
          <span className={'w-6 text-5xl'}>3.</span>
          {/*<p className={'text-xl'}>Вкусовые предпочтения</p>*/}
          {/*<SelectField*/}
          {/*  {...register('foodTaste')}*/}
          {/*  options={foodItems}*/}
          {/*  className={''}*/}
          {/*  labelClassName={''}*/}
          {/*/>*/}
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
                defaultValue={0}
              />
            )}
          />
        </div>
        <div className={'flex max-w-[320px] items-start gap-3'}>
          <span className={'w-6 text-5xl'}>4.</span>
          {/*<div>*/}
          {/*  <p className={'text-xl'}>Алкогольные предпочтения</p>*/}
          {/*  <SelectField*/}
          {/*    {...register('alcoholTaste')}*/}
          {/*    options={alcoholItems}*/}
          {/*    multiple*/}
          {/*    className={''}*/}
          {/*    labelClassName={''}*/}
          {/*  />*/}
          {/*</div>*/}
          <Controller
            name={'alcoholTaste'}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <ReactSelectField
                label={'Алкогольные предпочтения'}
                options={alcoholItems || []}
                field={field}
                placeholder={' '}
                isMulti={true}
                error={error}
                defaultValue={0}
              />
            )}
          />
        </div>
      </div>
      <Button type={'submit'} className={'w-64 self-center'}>
        Отправить информацию
      </Button>
    </form>
  );
}

export default Form;
