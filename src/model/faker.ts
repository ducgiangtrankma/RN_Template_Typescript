import {Model} from './model';
import {faker} from '@faker-js/faker';
import {Game} from './game';

export enum MODEL_TYPE {
  GAME,
  CHANNEL,
  USER,
}
import {
  YoutubeChannel,
  YoutubeImage,
  YoutubeThumbnails,
  YoutubeVideo,
} from './youtube';
import {Channel} from './channel';
import {User} from './user';

const fakeChannel = (): Channel => {
  return {
    id: faker.datatype.uuid(),
    youtube_channel: fakeYoutubeChannel(),
    games: [...Array(faker.datatype.number({min: 2, max: 10})).keys()].map(() =>
      fakeGame(),
    ),
  };
};
const fakeUser = (): User => {
  return {
    id: faker.datatype.uuid(),
    youtube_channel: fakeYoutubeChannel(),
    played_games: [
      ...Array(faker.datatype.number({min: 2, max: 10})).keys(),
    ].map(() => fakeGame()),
  };
};
const fakeYoutubeImage = (): YoutubeImage => {
  return {
    url: 'https://images.pexels.com/photos/12932558/pexels-photo-12932558.png?auto=compress&cs=tinysrgb&w=800',
    width: faker.datatype.number({min: 100, max: 400}),
    height: faker.datatype.number({min: 100, max: 400}),
  };
};
const fakeYoutubeChannel = (): YoutubeChannel => {
  return {
    id: faker.datatype.uuid(),
    title: faker.name.fullName(),
    avatar: fakeYoutubeImage(),
    link: faker.internet.url(),
    thumbnail: fakeYoutubeImage(),
  };
};

const fakeYoutubeVideo = (): YoutubeVideo => {
  return {
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    channel: fakeYoutubeChannel(),
    publishedAt: faker.datatype.datetime(),
    thumbnail: fakeYoutubeImage(),
  };
};
const fakeGame = (): Game => {
  return {
    id: faker.datatype.uuid(),
    video: fakeYoutubeVideo(),
    quizzes: [...Array(faker.datatype.number({min: 4, max: 20})).keys()],
  };
};
export const fake = (
  type: MODEL_TYPE,
  is_list: boolean = true,
): Model | Model[] => {
  var genFunc: Function;
  switch (type) {
    case MODEL_TYPE.GAME:
      genFunc = fakeGame;
      break;
    case MODEL_TYPE.CHANNEL:
      genFunc = fakeChannel;
      break;
    case MODEL_TYPE.USER:
      genFunc = fakeUser;
      break;
    default:
      genFunc = () => {
        return [];
      };
  }
  return genFunc == null
    ? []
    : !is_list
    ? genFunc()
    : [...Array(faker.datatype.number({min: 4, max: 20})).keys()].map(() =>
        genFunc(),
      );
};
