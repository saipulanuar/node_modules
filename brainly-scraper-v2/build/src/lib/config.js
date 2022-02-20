"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languages = exports.baseURLs = exports.graphqlQuery = void 0;
exports.graphqlQuery = `query SearchQuery($query: String!, $len: Int!) {\n    questionSearch(query: $query, first: $len, after: null) {\n    edges {\n      node {\n        databaseId,\n        points,\n        pointsForAnswer,\n        pointsForBestAnswer,\n        created,\n        isClosed,\n        content,\n        author { nick, receivedThanks, avatar { url, thumbnailUrl }, databaseId, description, helpedUsersCount, gender, created, specialRanks { name }, bestAnswersCount, answererLevel, points, rank { name }, friends { count }, answeringStreak { pointsForToday, pointsForTomorrow, progressIncreasedToday, progress, canLotteryPointsBeClaimed }, bestAnswersCountInLast30Days, questions { count, edges { node { content, grade { name }, subject { slug }, points, pointsForBestAnswer, pointsForAnswer, isClosed, canBeAnswered, created, attachments { url }, grade { name }, eduLevel, answers { nodes { databaseId, content, created, isBest, isConfirmed, qualityScore, points, ratesCount, verification { approval { approver { nick, databaseId }}}, attachments { url }, canComment, comments { count, edges { node { databaseId, deleted, content, author {\n                    nick, avatar { url, thumbnailUrl }, databaseId, friends { count }, receivedThanks, points, created, description\n                  }}}}}} }}} }\n        canBeAnswered,\n        grade {\n         name \n        },\n        attachments {\n        \turl\n        },\n        lastActivity,\n        subject {\n          slug\n        },\n        eduLevel,\n        similar {\n          question {\n            content, author { nick, avatar { url, thumbnailUrl }, databaseId, description, helpedUsersCount, gender, created, specialRanks { name }, bestAnswersCount, answererLevel, points, rank { name }, friends { count }, answeringStreak { pointsForToday, pointsForTomorrow, progressIncreasedToday, progress, canLotteryPointsBeClaimed }, bestAnswersCountInLast30Days, questions { count, edges { node { content, grade { name }, subject { slug }, points, pointsForBestAnswer, pointsForAnswer, isClosed, canBeAnswered, created, attachments { url }, grade { name }, eduLevel, answers { nodes { databaseId, content, created, isBest, isConfirmed, points, ratesCount, verification { approval { approver { nick, databaseId }}}, attachments { url }, canComment, comments { count, edges { node { content, author { nick, databaseId, avatar { url }}}}}}} }}} }\n            databaseId,\n        points,\n        pointsForAnswer,\n        pointsForBestAnswer,\n        created,\n        isClosed,\n        canBeAnswered,\n        grade {\n         name \n        },\n        eduLevel,\n          }\n        },\n        content,\n        answers {\n          hasVerified,\n          nodes {\n            author { receivedThanks, avatar { url, thumbnailUrl }, databaseId, description, helpedUsersCount, gender, created, specialRanks { name }, bestAnswersCount, answererLevel, points, rank { name }, friends { count }, answeringStreak { pointsForToday, pointsForTomorrow, progressIncreasedToday, progress, canLotteryPointsBeClaimed }, bestAnswersCountInLast30Days, questions { count, edges { node { content, grade { name }, subject { slug }, points, pointsForBestAnswer, pointsForAnswer, isClosed, canBeAnswered, created, attachments { url }, grade { name }, eduLevel, answers { nodes { databaseId, content, created, isBest, isConfirmed, qualityScore, points, ratesCount, verification { approval { approver { nick, databaseId }}}, attachments { url }, canComment, comments { count, edges { node { databaseId, deleted, content, author {\n                    nick, avatar { url, thumbnailUrl }, databaseId, friends { count }, receivedThanks, points, created, description\n                  }}}}}} }}} }\n            content, points, isBest, canComment, isConfirmed, qualityScore, thanksCount, ratesCount, comments {\n              edges {\n                node {\n                  databaseId, deleted, content, author {\n                    nick, avatar { url, thumbnailUrl }, databaseId, friends { count }, receivedThanks, points, created, description\n                  },\n                },\n              }\n            },\n            attachments {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}\n`;
exports.baseURLs = {
    id: 'https://brainly.co.id',
    us: 'https://brainly.com',
    es: 'https://brainly.lat',
    pt: 'https://brainly.com.br',
    ru: 'https://znanija.com',
    ro: 'https://brainly.ro',
    tr: 'https://eodev.com',
    ph: 'https://brainly.ph',
    pl: 'https://brainly.pl',
    hi: 'https://brainly.in',
    fr: 'https://nosdevoirs.fr',
};
exports.languages = Object.keys(exports.baseURLs);