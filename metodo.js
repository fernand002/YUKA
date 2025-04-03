public void MostrarComida() {
    // Supongamos que 'productos' es una lista que contiene todos los productos alimenticios de la base de datos.
    List<Producto> productos = obtenerProductosDeBaseDeDatos();

    for (Producto producto : productos) {
        System.out.println("Nombre: " + producto.getNombre());
        System.out.println("Calificación: " + producto.getCalificacion());
        System.out.println("Ingredientes: " + producto.getIngredientes());
        System.out.println("¿Es saludable? " + (producto.esSaludable() ? "Sí" : "No"));
        System.out.println("--------------------");
    }
}
public void FiltrarDatos(String criterio) {
    List<Producto> productos = obtenerProductosDeBaseDeDatos();
    List<Producto> productosFiltrados = new ArrayList<>();

    for (Producto producto : productos) {
        if (criterio.equals("saludable") && producto.esSaludable()) {
            productosFiltrados.add(producto);
        } else if (criterio.equals("no_saludable") && !producto.esSaludable()) {
            productosFiltrados.add(producto);
        }
    }

    // Mostrar los productos filtrados
    for (Producto producto : productosFiltrados) {
        System.out.println("Nombre: " + producto.getNombre());
        System.out.println("Calificación: " + producto.getCalificacion());
        System.out.println("--------------------");
    }
}
public void Escanear(String codigoDeBarras) {
    Producto producto = buscarProductoPorCodigoBarras(codigoDeBarras);

    if (producto != null) {
        System.out.println("Producto encontrado: " + producto.getNombre());
        System.out.println("Calificación: " + producto.getCalificacion());
        System.out.println("Ingredientes: " + producto.getIngredientes());
    } else {
        System.out.println("Producto no encontrado en la base de datos.");
    }
}

// Método auxiliar para buscar el producto en la base de datos
private Producto buscarProductoPorCodigoBarras(String codigoDeBarras) {
    // Aquí se simula la búsqueda en la base de datos.
    // En un escenario real, este código consultaría la base de datos.
    for (Producto producto : obtenerProductosDeBaseDeDatos()) {
        if (producto.getCodigoDeBarras().equals(codigoDeBarras)) {
            return producto;
        }
    }
    return null;
}
public void MostrarMenu() {
    System.out.println("Bienvenido a Yuka - Análisis de Productos");
    System.out.println("1. Mostrar todos los productos");
    System.out.println("2. Filtrar productos saludables");
    System.out.println("3. Escanear un producto");
    System.out.println("4. Salir");

    // Aquí puedes usar un Scanner para recibir la opción del usuario.
    Scanner scanner = new Scanner(System.in);
    int opcion = scanner.nextInt();

    switch (opcion) {
        case 1:
            MostrarComida();
            break;
        case 2:
            System.out.println("Filtrar por: (saludable / no_saludable)");
            String criterio = scanner.next();
            FiltrarDatos(criterio);
            break;
        case 3:
            System.out.println("Ingrese el código de barras del producto:");
            String codigo = scanner.next();
            Escanear(codigo);
            break;
        case 4:
            System.out.println("Gracias por usar Yuka. ¡Hasta luego!");
            break;
        default:
            System.out.println("Opción no válida.");
    }
}
