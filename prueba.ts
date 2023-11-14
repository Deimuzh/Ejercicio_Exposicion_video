// Modelo
class Usuario {
  private nombre: string;

  // Constructor: se llama al crear una nueva instancia de la clase Usuario
  constructor(nombre: string) {
      // Inicializa el atributo privado 'nombre' con el valor proporcionado
      this.nombre = nombre;
  }

  // Método público para obtener el nombre del usuario
  public getNombre(): string {
      return this.nombre;
  }
}
    // Vista
class Vista {
  // Método público para mostrar el nombre en la consola
  public mostrarNombre(nombre: string): void {
      // Imprime el nombre en la consola con un mensaje
      console.log(`El nombre es: ${nombre}`);
  }
}

    
// Controlador
class Controlador {
  // Atributos privados para almacenar instancias de Usuario y Vista
  private usuario: Usuario;
  private vista: Vista;

  // Constructor que toma instancias de Usuario y Vista como parámetros
  constructor(usuario: Usuario, vista: Vista) {
      // Asigna las instancias recibidas a los atributos privados
      this.usuario = usuario;
      this.vista = vista;
  }

  // Método público para obtener el nombre del usuario y mostrarlo en la vista
  public obtenerNombre(): void {
      // Obtiene el nombre del usuario utilizando el método getNombre() del modelo (Usuario)
      const nombre = this.usuario.getNombre();

      // Llama al método mostrarNombre() de la vista para mostrar el nombre
      this.vista.mostrarNombre(nombre);
  }
}

    
    // Uso
    const usuario = new Usuario("John Doe");
    const vista = new Vista();
    const controlador = new Controlador(usuario, vista);
    
    controlador.obtenerNombre();