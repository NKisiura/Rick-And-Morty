import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharacterInterface} from "../../global/types/character.interface";
import {API_BASE_URL, API_CHARACTER_URL, API_EPISODE_URL} from "../../global/constants/api-constants";
import {EpisodeInterface} from "../types/episode.interface";

@Injectable()
export class CharacterDetailsService {

  constructor(private http: HttpClient) {}

  public getSingleCharacter(id: number): Observable<CharacterInterface> {
    return this.http.get<CharacterInterface>(API_BASE_URL + API_CHARACTER_URL + id);
  }

  public getCharacterFirstEpisode(id: number): Observable<EpisodeInterface> {
    return this.http.get<EpisodeInterface>(API_BASE_URL + API_EPISODE_URL + id);
  }
}
