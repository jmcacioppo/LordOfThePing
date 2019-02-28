export class DateFunctions {
  public date: any;
  
  constructor(date: any) {
    this.date = date;
  }

  public getQuarter(): number {
    var q: number[] = [1, 2, 3, 4];
    return q[Math.floor(this.date.getMonth() / 3)];
  }
  
  public getWeekNumber(): number {
    this.date = new Date(Date.UTC(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()));
    this.date.setUTCDate(this.date.getUTCDate() + 4 - (this.date.getUTCDay()||7));
    var yearStart: any = new Date(Date.UTC(this.date.getUTCFullYear(),0,1));
    var weekNo: number = Math.ceil(( ( (this.date - yearStart) / 86400000) + 1)/7);
    return weekNo;
  }
}