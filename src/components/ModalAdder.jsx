import { XMarkIcon } from '@heroicons/react/16/solid'
import { useAppStore } from '../stores/useAppStore'
import { useForm } from 'react-hook-form'
import Error from './Error'

const ModalAdder = () => {

  const styledButtons = 'bg-[#FE9A00] text-white uppercase rounded text-center px-6 cursor-pointer transition hover:bg-[#f19200]'
  const styledFieldset = 'flex flex-col space-y-1'
  const styledInputs = 'border border-[#FE9A00] rounded px-1'

  const setModal = useAppStore(state => state.setModal)
  const setModalType = useAppStore(state => state.setModalType)
  const modal_type = useAppStore(state => state.modal_type)
  const addNewAccount = useAppStore(state => state.addNewAccount)

  const {register, handleSubmit, formState: {errors}} = useForm()


  return (
    <div className='absolute bg-[#00000026] w-full h-full top-0 left-0'>
      <div className='flex justify-center items-center h-full'>
        <div className='bg-white rounded'>
          <div className='flex justify-end p-2'>
            <XMarkIcon 
              className='w-5 pb-1 cursor-pointer'
              onClick={() => setModal(false)}
            />
          </div>
          {modal_type === 'common' ? (
            <>
              <h2 className='text-center font-medium '>Selecciona una opcion</h2>
              <div className='gap-2 flex flex-col p-3'>
                <button 
                  className={styledButtons}
                  onClick={() => setModalType('account')}
                >Agregar cuenta</button>
                <button 
                  className={styledButtons}
                  onClick={() => setModalType('movement')}
                >Agregar movimiento</button>
              </div>
            </>
          ) : modal_type === 'account' ? (
            <>
              <h2 className='text-center font-medium '>Agregar una cuenta</h2>
              <div className='gap-2 flex flex-col p-3'>
                <form 
                  className='space-y-2 px-2'
                  onSubmit={handleSubmit((data) => addNewAccount(data))}
                >
                  <fieldset className={styledFieldset}>
                    <label htmlFor="name">Nombre de la cuenta</label>
                    <input 
                      className={styledInputs} 
                      id="name" 
                      name="name" 
                      type="text" 
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Este campo es obligatorio'
                        }
                      })}
                      />
                      {errors.name && <Error>{errors?.name?.message}</Error>}
                  </fieldset>
                  <fieldset className={styledFieldset}>
                    <label htmlFor="amount">Cantidad inicial</label>
                    <input 
                      className={styledInputs} 
                      id="amount" 
                      name="amount" 
                      type="number"
                       {...register('amount', {
                        required: {
                          value: true,
                          message: 'Este campo es obligatorio'
                        }
                      })}
                      />
                    {errors.amount && <Error>{errors?.amount?.message}</Error>}
                  </fieldset>
                  <div className='flex justify-end'>
                    <input 
                      className='bg-[#FE9A00] text-white uppercase rounded text-center px-3 mt-2 cursor-pointer transition hover:bg-[#f19200]' 
                      type="submit" 
                      value="Agregar" 
                    />
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              <h2 className='text-center font-medium '>Agregar un movimiento</h2>
              <div className='gap-2 flex flex-col p-3'>
               <form className='space-y-2 px-2'>
                <fieldset className={styledFieldset}>
                  <label htmlFor="name">Nombre de la cuenta</label>
                  <input className={styledInputs} id="name" name="name" type="text" />
                </fieldset>
                <fieldset className={styledFieldset}>
                  <label htmlFor="amount">Cantidad inicial</label>
                  <input className={styledInputs} id="amount" name="amount" type="number" />
                </fieldset>
                <div className='flex justify-end'>
                  <input className='bg-[#FE9A00] text-white uppercase rounded text-center px-3 mt-2 cursor-pointer transition hover:bg-[#f19200]' type="submit" value="Agregar" />
                </div>
               </form>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default ModalAdder
