import React from "react";
import Color from "../palette/color";
import * as Yup from "yup"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";

export default function Addreseau() {
  const validationSchema = Yup.object().shape({
    nom: Yup.string("Le nom ne doit contenir que des lettres")
      .required('Le  nom du sous reseau  est obligatoire'),
    volume: Yup.number("Le volume ne doit contenir que des lettres")
      .required('Le volume du sous reseau est obligatoire'),
    adresse: Yup.string("L'adresse ne doit contenir que des lettres")
      .required("L'adresse est obligatoire")
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  return (
    <>
      <div className="container mx-auto px-4 h-full text-white">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4" style={{backgroundColor:'#111827'}}>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Ajouter un point d'acces
                  </h6>
                </div>
                <div className="btn-wrapper text-center">

                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nom du sous reseaux
                    </label>
                    <input
                      type="text"
                      name= "nom"
                      {...register('nom')}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                      placeholder="Nom de votre point d'acces"
                    />
                    <p className="text-red-500 italic">{errors.nom?.message}</p>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Volume total
                    </label>
                    <input
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                      placeholder="Volume total"
                    />
                    <p className="text-red-500 italic">{errors.nom?.message}</p>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      adresse
                    </label>
                    <input
                      type="Text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-black"
                      placeholder="Categorie"
                    />
                    <p className="text-red-500 italic">{errors.adresse?.message}</p>
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        J'accepte {" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      style={{backgroundColor:Color.paletteTeal1}}
                    >
                      Ajouter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}