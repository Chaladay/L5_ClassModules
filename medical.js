class Medical {
    constructor(name = "Неизвестно", birthDate = "Не указана", hasAllergy = false) {
        this.name = name;           
        this.birthDate = birthDate; 
        this.hasAllergy = hasAllergy; 
    }
    getName() {
        return this.name;
    }

    getBirthDate() {
        return this.birthDate;
    }

    getHasAllergy() {
        return this.hasAllergy;
    }
    setName(name) {
        this.name = name;
    }

    setBirthDate(birthDate) {
        this.birthDate = birthDate;
    }

    setHasAllergy(hasAllergy) {
        this.hasAllergy = hasAllergy;
    }
    show() {
        console.log("Медицинская карта:");
        console.log("Имя: " + this.name);
        console.log("Дата рождения: " + this.birthDate);
        console.log("Аллергия: " + (this.hasAllergy ? "Есть" : "Нет"));
    }
    delete() {
        this.name = "Удалено";
        this.birthDate = "Не указана";
        this.hasAllergy = false;
    }
    copy() {
        return this;
    }
    static clone(original) {
        return new Medical(
            original.name,
            original.birthDate,
            original.hasAllergy
        );
    }
    _checkAllergy() {
        if (this.hasAllergy) {
            console.log("Требуется особая осторожность");
        }
    }
}