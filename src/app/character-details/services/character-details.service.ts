import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharacterInterface} from "../../global/types/character.interface";
import {API_BASE_URL, API_CHARACTER_URL} from "../../global/constants/api-constants";

@Injectable()
export class CharacterDetailsService {

  constructor(private http: HttpClient) {}

  public getSingleCharacter(id: string): Observable<CharacterInterface> {
    return this.http.get<CharacterInterface>(API_BASE_URL + API_CHARACTER_URL + id);
  }
}
