
public class Comida {
    private String nombre;
    private String pais;
    private int energia;
    private int azucar;
    private int grasasSaturadas;
    private int sal;
    private int proteina;

    public Comida(String nombre, String pais, int energia, int azucar, int grasasSaturadas, int sal, int proteina) {
        this.nombre = nombre;
        this.pais = pais;
        this.energia = energia;
        this.azucar = azucar;
        this.grasasSaturadas = grasasSaturadas;
        this.sal = sal;
        this.proteina = proteina;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public int getEnergia() {
        return energia;
    }

    public void setEnergia(int energia) {
        this.energia = energia;
    }

    public int getAzucar() {
        return azucar;
    }

    public void setAzucar(int azucar) {
        this.azucar = azucar;
    }

    public int getGrasasSaturadas() {
        return grasasSaturadas;
    }

    public void setGrasasSaturadas(int grasasSaturadas) {
        this.grasasSaturadas = grasasSaturadas;
    }

    public int getSal() {
        return sal;
    }

    public void setSal(int sal) {
        this.sal = sal;
    }

    public int getProteina() {
        return proteina;
    }

    public void setProteina(int proteina) {
        this.proteina = proteina;
    }

    public void filtrarPais() {
        System.out.println("Filtrando por país...");
    }
    
    public void filtrarNombre() {
        System.out.println("Filtrando por nombre...");
    }
    
    public void filtrarQR() {
        System.out.println("Filtrando por código QR...");
    }
    
    public void escanearQR() {
        System.out.println("Escaneando código QR...");
    }
    
    public void mostrarMenu() {
        System.out.println("Mostrando menú...");
    }
    
    public static void main(String[] args) {
        System.out.println("Clase Comida ejecutada correctamente.");
    }
}
