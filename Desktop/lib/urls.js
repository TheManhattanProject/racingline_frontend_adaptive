const domain = 'http://139.59.32.6:80/';

const login = `${domain}login/`;
const signup = `${domain}registration/`;
const RefreshToken = `${domain}refresh-token/`;
const HotQuestionsUrl = `${domain}hot-questions/`;
const CreateAnswer = `${domain}auth/create-answer/`;
const CreateQuestion = `${domain}auth/create-question/`;
const Questionlt = `${domain}questions-list/`;
const QuestionltAth = `${domain}auth/questions-list/`;
const CreateCommentQuestion = `${domain}auth/create-comment-for-question/`;
const GetUserPolls = `${domain}auth/get-user-polls/`;
const GetPolls = `${domain}get-polls/`;
const VotePoll = `${domain}auth/vote-poll/`;
const CreatePolls = `${domain}auth/create-poll/`;
const BookmarkQuestion = `${domain}auth/bookmark-question/`;
const DownvoteQuestion = `${domain}auth/downvote-question/`;
const UpvoteQuestion = `${domain}auth/upvote-question/`;

export { BookmarkQuestion, CreateAnswer, CreateCommentQuestion, CreatePolls, CreateQuestion, DownvoteQuestion, GetPolls, GetUserPolls, HotQuestionsUrl, Questionlt, QuestionltAth, RefreshToken, UpvoteQuestion, VotePoll, login, signup };

