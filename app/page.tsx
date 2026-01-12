export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Control Total de tu Producción
          </h1>
          <p className="mb-10 text-xl text-gray-300 sm:text-2xl">
            Gestiona el stock, calcula mermas y planifica las compras de Culto Kebab en segundos
          </p>
          <button className="rounded-lg bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black">
            Entrar al Panel
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1: Stock en Tiempo Real */}
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 transition-all hover:border-orange-600/50 hover:shadow-lg hover:shadow-orange-600/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-orange-600/20">
                <svg
                  className="h-8 w-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Stock en Tiempo Real</h3>
              <p className="text-gray-400">
                Sabe lo que tienes en la cámara
              </p>
            </div>

            {/* Feature 2: Calculadora de Producción */}
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 transition-all hover:border-orange-600/50 hover:shadow-lg hover:shadow-orange-600/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-orange-600/20">
                <svg
                  className="h-8 w-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Calculadora de Producción</h3>
              <p className="text-gray-400">
                Dime cuánto venderás, te diré cuánto comprar
              </p>
            </div>

            {/* Feature 3: Escandallos Automáticos */}
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 transition-all hover:border-orange-600/50 hover:shadow-lg hover:shadow-orange-600/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-orange-600/20">
                <svg
                  className="h-8 w-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Escandallos Automáticos</h3>
              <p className="text-gray-400">
                Control exacto de gramos por ración
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black px-4 py-8 text-center text-gray-500 sm:px-6 lg:px-8">
        <p>Internal Tool for Culto Kebab - 2026</p>
      </footer>
    </div>
  );
}
