import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {GameType} from '../../const';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';

import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player";

const GenreQuestionScreenWrapped = withAudioPlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withAudioPlayer(ArtistQuestionScreen);

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };

    this._onAnswerHandler = this._onAnswerHandler.bind(this);
  }

  _onAnswerHandler() {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  }

  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (!question) {
      return (
        <Redirect to="/" />
      );
    }

    switch (question.type) {
      case GameType.ARTIST:
        return (
          <ArtistQuestionScreenWrapped
            question={question}
            onAnswer={this._onAnswerHandler}
          />
        );
      case GameType.GENRE:
        return (
          <GenreQuestionScreenWrapped
            question={question}
            onAnswer={this._onAnswerHandler}
          />
        );
    }

    return <Redirect to="/" />;
  }

}

GameScreen.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default GameScreen;
