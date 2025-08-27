export function NoProductsFound() {
  return (
    <article className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-xl p-8 text-center">
        <span role="img" aria-label="carita triste" className="mb-4 text-6xl">
          😔
        </span>
        <h2 className="mb-2 bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-400 bg-clip-text font-sans text-3xl font-extrabold text-balance text-transparent sm:text-4xl">
          ¡Ups! No encontramos productos
        </h2>
        <p className="text-md mb-6 font-sans text-gray-600 sm:text-lg">
          Parece que no hay productos que coincidan con tu búsqueda.
        </p>
        <div className="w-full">
          <p className="mb-4 font-sans text-lg font-semibold text-gray-700 sm:text-xl">
            Aquí hay algunas ideas para probar:
          </p>
          <ul className="text-md w-full list-inside list-disc space-y-2 text-center text-pretty text-gray-600 sm:text-lg">
            <li className="font-sans">Verifica la ortografía de tus palabras clave.</li>
            <li className="font-sans">Prueba con términos de búsqueda más generales.</li>
            <li className="font-sans">Explora nuestras categorías en el menú.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
