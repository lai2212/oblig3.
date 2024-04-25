public class Kunde {
    //klasse kunde med attributtene
    private String filmer;
    private String antall;
    private String fornavn;
    private String etternavn;
    private String telefon;
    private String epost;

    //konstruktør til klassen
    public Kunde(String filmer,String antall, String fornavn,String etternavn, String telefon, String epost){
        this.filmer = filmer;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn =etternavn;
        this.telefon = telefon;
        this.epost = epost;

    }
    //lager get og set metoder;
    public String getFilmer(){
        return filmer;
    }
    public void setFilmer(String filmer){
        this.filmer =filmer; }

    public String getAntall(){
        return antall;
    }
    public void setAntall(String antall){
        this.antall = antall; }


    public String getFornavn(){
        return fornavn;
    }
    public void setFornavn(String fornavn){
        this.fornavn = fornavn; }


    public String getEtternavn(){
        return etternavn;
    }
    public void setEtternavn(String etternavn){
        this.etternavn = etternavn; }

    public String getTelefon(){
        return telefon;
    }
    public void setTelefon(String telefon){
        this.telefon = telefon; }

    public String getEpost(){
        return epost;
    }
    public void setEpost(String epost){
        this.epost = epost; }
}


