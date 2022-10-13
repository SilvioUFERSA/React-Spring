import Notification from "../Notification"

function BoxSales() {
  return (
  <section className="px-[40px] py-[10px]">
    <div className="bg-color bg-slate-700 rounded-[10px] px-[30px] py-[10px]">
      <h2 className=" text-sky-400 font-bold">Vendas</h2> 
      
      <div>
        <div className="mb-[16px] max-w-[300]">
          <input className="bg-slate-800 mt-1 w-[300px] h-[36px] border-solid-[1px] rounded-[5px] px-[0px] py-[20px] font-[18px]" type="text" />
        </div>
        <div className="mb-[16px] max-w-[300]">
          <input className="bg-slate-800 mt-1 w-[300px] h-[36px] border-solid-[1px] rounded-[5px] px-[0px] py-[20px] font-[18px]" type="text" />
        </div>
      </div>
    
      <div className="overflow-hidden">
        <table className="w-full border-spacing-4 color-slate-200 font-bold hover:table-auto"> 
          <thead className="h-[55px] text-[16px] twxt-slate-100 sticky">
            <tr>
                <th className="table-cell">ID</th>
                <th className="table-cell">Data</th>
                <th>Vendedor</th>
                <th className="table-cell">Visitas</th>
                <th className="table-cell">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
            </tr>
            </thead>
              <tbody className="text-lg font-normal text-slate-300 text-center " >
                <tr className="h-[74px] border-t-[1px] border-solid border-slate-400 sticky odd:bg-slate-700 even:bg-slate-800">
                  <td className="table-cell">#001</td>
                  <td className="table-cell">29/09/2022</td> 
                  <td>Silvio Martins</td>
                  <td className="table-cell">10</td>
                  <td className="table-cell">08</td>
                  <td>R$ 14020.00</td>
                  <td>
                    <div className="flex justify-center">
                      <div>
                        <Notification />
                      </div>
                    </div>
                  </td>
                </tr>

                <tr className="h-[74px] border-t-[1px] border-solid border-slate-400 sticky  odd:bg-slate-700 even:bg-slate-800">
                  <td className="table-cell">#002</td>
                  <td className="table-cell">30/09/2022</td>
                  <td>Rodrigo Rodrigues</td>
                  <td className="table-cell">11</td>
                  <td className="table-cell">05</td>
                  <td>R$ 10300.00</td>
                  <td>
                    <div className="flex justify-center">
                      <div>
                        <Notification />
                      </div>
                    </div>
                  </td>
                </tr>

                <tr className="h-[74px] border-t-[1px] border-solid border-slate-400 sticky  odd:bg-slate-700 even:bg-slate-800">
                  <td className="table-cell">#003</td>
                  <td className="table-cell">30/09/2022</td>
                  <td>Joicy Dias</td>
                  <td className="table-cell">15</td>
                  <td className="table-cell">11</td>
                  <td>R$ 19700.00</td>
                  <td>
                    <div className="flex justify-center">
                      <div>
                        <Notification />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
        </table>
      </div>
    </div>
  </section>
  )
}

export default BoxSales