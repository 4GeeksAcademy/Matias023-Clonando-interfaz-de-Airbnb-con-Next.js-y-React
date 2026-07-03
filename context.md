# Mini-brief tecnico - Clon de interfaz Airbnb

## 1. Objetivo del proyecto
Construir una base frontend funcional inspirada en Airbnb usando Next.js 16, React, TypeScript y Tailwind CSS, con App Router, componentes reutilizables y datos mock locales para cubrir Home, Catalogo y Detalle de habitacion.

## 2. Usuario objetivo
- Persona que explora alojamientos por destino, categoria y cantidad de huespedes.
- Usuario mobile que necesita descubrir opciones rapidamente y navegar a los detalles.
- Usuario desktop que compara resultados, revisa galeria, amenidades y resumen de reserva.

## 3. Vistas implementadas

### Home (/)
Pantalla inicial con carga simulada de alojamientos, filtros basicos y acceso al catalogo.

Componentes principales en uso:
- Header reutilizable con logo y navegacion.
- SearchBar con busqueda y contador de huespedes.
- CategoryNav para filtrar por categoria.
- FeaturedStaysSection con cards destacadas.
- CTA hacia /catalog.
- Footer reutilizable.

### Catalogo (/catalog)
Vista de exploracion completa con la misma base de filtros que Home y selector de ordenamiento visible.

Componentes principales en uso:
- Header reutilizable.
- SearchBar reutilizable.
- CategoryNav reutilizable.
- Selector de ordenamiento con opciones mock.
- StayGrid con tarjetas enlazadas al detalle.
- CTA de regreso a Home.
- Footer reutilizable.

### Detalle de habitacion (/rooms/[id])
Vista dinamica por id que busca el alojamiento en los mocks y muestra estado vacio si no existe.

Componentes principales en uso:
- Header reutilizable.
- RoomGallery con imagen activa, miniaturas y fallback visual.
- Bloque principal con titulo, ubicacion y rating.
- Seccion de descripcion.
- HostInfo.
- RoomAmenities.
- BookingPanel con precio, contador de huespedes y CTA simulado.
- Footer reutilizable.

## 4. Datos actuales por alojamiento
Cada alojamiento usa actualmente estos campos del modelo TypeScript:
- id.
- title.
- location.
- categoryId.
- pricePerNight.
- currency.
- rating.
- reviewsCount.
- maxGuests.
- coverImage.
- images.
- description.
- hostName.
- hostYears.
- amenities.

## 5. Flujo de navegacion con Link de Next.js
- El logo del header navega a /.
- Desde Home se puede navegar a /catalog mediante CTA y navegacion superior.
- Cada card en Home y Catalog navega a /rooms/[id].
- Si un alojamiento no existe, la vista de detalle muestra acceso de vuelta a /catalog.
- El footer usa rutas internas existentes del proyecto.

## 6. Enfoque mobile-first
- La implementacion parte de una base mobile-first para 375px.
- Los layouts principales usan una sola columna por defecto.
- Desde 768px se expanden grids, separacion visual y layout de dos columnas en el detalle.

## 7. Estado actual con useState
- Home:
	- busqueda.
	- categoria activa.
	- contador de huespedes.
- Catalogo:
	- busqueda.
	- categoria activa.
	- contador de huespedes.
	- ordenamiento.
- Detalle:
	- indice de galeria.
	- estado de errores de imagen.
	- contador de huespedes en reserva.

## 8. Uso actual de useEffect
- Home y Catalogo simulan carga inicial de datos mediante hook reutilizable con setTimeout.
- El detalle no depende de useEffect para cargar el alojamiento porque resuelve el id directamente desde params y los mocks.

## 9. Restricciones tecnicas vigentes
- Solo Tailwind CSS para estilos.
- Solo componentes funcionales.
- Componentes organizados en /components.
- Tipos centralizados en /types.
- Datos mock locales en /data.
- Sin librerias UI externas.
- Sin consumo de APIs externas en esta fase.
