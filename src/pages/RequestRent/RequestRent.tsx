import RequestButton from '../../ui-kit/RequestButton/RequestButton';
import Subtitle from '../../ui-kit/Subtitle/Subtitle';
import Title from '../../ui-kit/Title/Title';
import './RequestRent.css';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormFields {
  name: string;
  phoneNumber: string;
  motorcycle: boolean;
  atv: boolean;
  snowmobile: boolean;
  quantity: number;
  message?: string;
}

const RequestRent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormFields>({
    mode: 'onBlur',
    defaultValues: {
      motorcycle: true,
      atv: false,
      snowmobile: false,
      quantity: 1,
    },
  });

  const onSubmit: SubmitHandler<IFormFields> = (data: IFormFields) => {
    console.log('data===', data);
    console.log('errors==', errors);
    console.log(data.phoneNumber);
    reset();
  };

  return (
    <article>
      <div className="request-rent">
        <h1 className="request-rent__title">Заявка на прокат</h1>
        <div className="request-rent__description">
          <Title title="Не откладывай эмоции на завтра!" />
          <Subtitle subtitle="Бронируй заранее" />
        </div>
        <form data-testid="form" className="request-rent__form" onSubmit={handleSubmit(onSubmit)}>
          <p>Заполните форму</p>
          <div className={`request-rent__item${errors.name ? ' request-rent__item_red' : ''}`}>
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              {...register('name', {
                required: 'Укажите Ваше имя',
              })}
            />
          </div>
          {errors.name && (
            <div className="request-rent__item request-rent__item_red">{errors.name.message}</div>
          )}
          <div
            className={`request-rent__item${errors.phoneNumber ? ' request-rent__item_red' : ''}`}>
            <label htmlFor="tel">Ваш номер телефона:</label>
            <input
              type="tel"
              id="tel"
              {...register('phoneNumber', {
                required: 'Оставьте Ваш номер телефона',
              })}
            />
          </div>

          {errors.phoneNumber && (
            <div className="request-rent__item request-rent__item_red">
              {errors.phoneNumber.message}
            </div>
          )}
          <div className="request-rent__item">
            <label htmlFor="technic">На какой технике хотите покататься?</label>
            <div className="request-rent__checkbox">
              <label>
                <input
                  className="real-checkbox"
                  type="checkbox"
                  id="motorcycles"
                  {...register('motorcycle')}
                />
                <span className="custom-checkbox"></span>
                Мотоцикл
              </label>
              <label>
                <input className="real-checkbox" type="checkbox" id="atvs" {...register('atv')} />
                <span className="custom-checkbox"></span>
                Квадроцикл
              </label>
              <label>
                <input
                  className="real-checkbox"
                  type="checkbox"
                  id="snowmobile"
                  {...register('snowmobile')}
                />
                <span className="custom-checkbox"></span>
                Снегоход
              </label>
            </div>
          </div>
          <div className="request-rent__item">
            <label htmlFor="name">Количество человек:</label>
            <input type="number" id="quantity" {...register('quantity')} />
          </div>

          <div className="request-rent__item">
            <label htmlFor="message">Пожелания(при необходимости):</label>
            <textarea id="message" {...register('message')}></textarea>
          </div>

          <RequestButton title="отправить" />
        </form>
      </div>
    </article>
  );
};

export default RequestRent;
