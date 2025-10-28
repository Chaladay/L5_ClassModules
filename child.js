class Child extends Medical{
    constructor(name, birthDate, hasAllergy, diagnoz = "Не установлен", hasVaccine = false) {
        super(name, birthDate, hasAllergy);
        this.diagnoz = diagnoz;
        this.hasVaccine = hasVaccine; 
    }
    getDiagnoz() {
        return this.diagnoz;
    }
    getHasVaccine() {
        return this.hasVaccine;
    }
    setDiagnoz(diagnoz) {
        this.diagnoz = diagnoz;
    }
    setHasVaccine(hasVaccine) {
        this.hasVaccine = hasVaccine;
    }
    show() {
        console.log("Детская медицинская карта:");
        console.log("Имя: " + this.name);
        console.log("Дата рождения: " + this.birthDate);
        console.log("Аллергия: " + (this.hasAllergy ? "Есть" : "Нет"));
        console.log("Диагноз: " + this.diagnoz);
        console.log("Вакцина: " + (this.hasVaccine ? "Есть" : "Нет"));
    }
    delete() {
        super.delete();
        this.diagnoz = "Не установлен";
        this.hasVaccine = false;
    }
    static clone(original) {
        return new Child(
            original.name,
            original.birthDate,
            original.hasAllergy,
            original.diagnoz,
            original.hasVaccine
        );
    }
}