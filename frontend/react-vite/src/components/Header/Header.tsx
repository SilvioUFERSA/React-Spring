import logo from '../../assets/img/logo.svg'

function Header(){
  return(
    <header className="flex items-center justify-center h-[220px] bg-gradient-to-r from-cyan-800 to-blue-800 border-b-4 border-slate-600">
      <div className="flex flex-col items-center">
        <img alt="logo" src={logo} className="w-[200px]"></img>
            <h1 className="mt-[15px] text-3xl font-semibold">Meta</h1>
            <p>
              Projeto criado por
              <a href="https://www.instagram.com/silvioms_/" className="text-sm font-light"> @silvioms_</a>
            </p>
      </div>
    </header>
  )
}

export default Header