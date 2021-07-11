import React from 'react';
import { useForm } from 'react-hook-form';

export default function CustomerForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors);
  return (
    <form onSubmit={handleSubmit((data) => {
      console.log(data);
    })}>
      <div className='wrapper'>
        <h2>Bezorg frequentie formulier</h2>
        <div class='section'>
          <label htmlFor="voornaam">Voornaam</label><br />
          <input type="text" placeholder="Henk" {...register("voornaam", { required: true, maxLength: 80 })} />
          <br />
          {errors.voornaam && <span class='error'>Het voornaam veld heeft geen valide waarde.</span>}
          <br />
          <label htmlFor="achternaam">Achternaam</label><br />
          <input type="text" placeholder="Pietje" {...register("achternaam", { required: true, maxLength: 100 })} />
          <br />
          {errors.achternaam && <span class='error'>Het achternaam veld heeft geen valide waarde.</span>}
          <br />
          <label htmlFor="leeftijd">Leeftijd</label><br />
          <input type="number" placeholder="55" {...register("leeftijd", { required: true, maxLength: 2 })} />
          <br />
          {errors.leeftijd && <span class='error'>Het leeftijd veld heeft geen valide waarde.</span>}
          <br />
          <label htmlFor="postcode">Postcode</label><br />
          <input type="text" placeholder="9999ZZ" {...register("postcode", { required: true, pattern: /\d{4}[a-zA-Z]{2}/i })} />
          <br />
          {errors.postcode && <span class='error'>Het postcode veld heeft geen valide waarde.</span>}
        </div>
        <br />
        <div class='section'>
          <label>Bezorg frequentie</label> <br />
          <label>
            <input {...register("bezorgfrequentie", { required: true })} type="radio" value="Iedere week" />
            Iedere week
          </label>
          <br />
          <label>
            <input {...register("bezorgfrequentie", { required: true })} type="radio" value="Om de week" />
            Om de week
            <br />
          </label>
          <label>
            <input {...register("bezorgfrequentie", { required: true })} type="radio" value="Iedere maand" />
            Iedere maand
            <br />
          </label>
          <label>
            <input {...register("bezorgfrequentie", { required: true })} type="radio" value="Anders" />
            Anders
            <br />
          </label>
          {errors.bezorgfrequentie && <span class='error'>Selecteer minstens een bezorgfrequentie.</span>}
        </div>
        <br />
        <div class='section'>
          <label>
            Opmerking <br />
            <textarea {...register("opmerking", {})} />
          </label>
          <br />
          <label>
            <input type="checkbox"  {...register("voorwaarde", { required: true })} />
            Ik ga akkoord met de voorwaarden
            <br />
          </label>
          {errors.bezorgfrequentie && <span class='error'>U moet akkoord gaan met de voorwaarden.</span>}
        </div>
        <br />
        <input type="submit" />
      </div>
    </form>
  );
};
