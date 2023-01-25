import {format} from "date-fns";

export class GeneralUtils {
  public static getPrettyDate(date: string) {
    return format(new Date(date), 'dd.MM.yyyy')
  }
  public static capitalise(word: string) {
    return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1)
    }
}
