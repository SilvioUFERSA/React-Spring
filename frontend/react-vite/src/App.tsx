import Notification from "./components/Notification"
import Header from "./components/Header/Header"
import BoxSales from "./components/BoxSales/BoxSales"

function App() {

  return (
      <>
        <body>
          <Header />
            <main>
              <section className="pl-[40px] pt-[10px]">
                <div className="w-full max-w-[900px] m-auto">
                  <BoxSales />
                </div>
              </section>            
            </main>
        </body>
      </>
    )
  }

export default App
