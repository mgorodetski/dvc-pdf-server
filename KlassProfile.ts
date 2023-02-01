export class KlassProfile {
    id: string;
    klassName: string;
    city: string;
    school: string;
    timestamp: Date;

    set() {
        this.id = this.id.toString();
        this.klassName = this.klassName.toString();
        this.city = this.city.toString();
        this.school = this.school.toString();
        this.timestamp = new Date();
    }
}
