import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Snackbar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import '../assets/styles/security-questionnaire.scss';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert } from '@mui/material';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import Header from '../components/SecurityQuestionnaire/Header';
import ProgressBar from '../components/SecurityQuestionnaire/Progressbar';
import SecurityQuestionnaireImage from '../assets/images/security-questionnaire.png';
import {
  getSecurityQuestionnaireById,
  updateVendorResponse,
  uploadFile,
  deleteFile
} from '../services/result.service';
import YesNoInput from '../components/SecurityQuestionnaire/RadioInput';
import InputText from '../components/SecurityQuestionnaire/InputText';
import SingleSelect from '../components/SecurityQuestionnaire/SingleSelect';
import MultiSelect from '../components/SecurityQuestionnaire/MultiSelect';
import Dropdown from '../components/SecurityQuestionnaire/Dropdown';
import SuccessPage from '../components/SuccessPage';
import SuccessIcon from '../assets/images/eye-icon.svg';
import ErrorIcon from '../assets/images/error.svg';
import { ReactComponent as AttachIcon } from '../assets/images/attach.svg';

const SecurityQuestionnaire = () => {
  const params = useParams();
  const history = useHistory();
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [failureToast, setFailureToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [sToast, setStoast] = useState(false);
  const [fToast, setFtoast] = useState(false);
  const [fMsg, setFmsg] = useState('');

  const handleSuccessClose = () => {
    setStoast(false);
  };
  const handleFailureClose = () => {
    setFtoast(false);
  };
  const selectFile = async (event, text, index) => {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    setUploading(true);
    try {
      const res = await uploadFile(formData);
      setStoast(true);
      const anwserArray = [...answers];
      const answerIndex = anwserArray.findIndex(
        (x) => x.question_id === questions[currentQuestionNumber - 1].id
      );
      anwserArray[answerIndex].additional_requirements[index] = {
        text,
        fileName: event.target.files[0].name,
        url: res.file_url,
        fId: res.file_name
      };
      setAnswers(anwserArray);
      setUploading(false);
    } catch (error) {
      setUploading(false);
      setFtoast(true);
      setFmsg('Some Error Occured');
    }
  };
  const isFilled = () => {
    const answerIndex = answers.findIndex(
      (x) => x.question_id === questions[currentQuestionNumber - 1].id
    );
    return !!answers[answerIndex]?.answer;
  };
  const getFileName = (index) => {
    const answerIndex = answers.findIndex(
      (x) => x.question_id === questions[currentQuestionNumber - 1].id
    );
    return answers[answerIndex]?.additional_requirements[index]?.fileName || '';
  };
  const getFileUrl = (index) => {
    const answerIndex = answers.findIndex(
      (x) => x.question_id === questions[currentQuestionNumber - 1].id
    );
    return answers[answerIndex]?.additional_requirements[index]?.fId || '';
  };
  const getDeleteIcon = (index) => {
    const answerIndex = answers.findIndex(
      (x) => x.question_id === questions[currentQuestionNumber - 1].id
    );
    if (!answers[answerIndex]?.additional_requirements[index]?.fileName) {
      return null;
    }
    return <DeleteForeverOutlinedIcon />;
  };
  const getSecurityQuestionnaire = async () => {
    setLoading(true);
    const security_questionnaire = await getSecurityQuestionnaireById(
      params.id
    );
    setQuestions(security_questionnaire.questions);
    setTotalQuestions(security_questionnaire.questions.length);
    setCurrentQuestionNumber(1);
    setLoading(false);
  };
  const goBack = () => {
    setCurrentQuestionNumber(currentQuestionNumber - 1);
  };
  const goNext = () => {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };

  const onSubmit = async () => {
    setLoading(true);
    await updateVendorResponse(answers);
    setOpenModal(true);
    setLoading(false);
  };
  const getCurrentAnswers = () => {
    const anwserArray = [...answers];
    const answerIndex = anwserArray.findIndex(
      (x) => x.question_id === questions[currentQuestionNumber - 1].id
    );
    return answerIndex !== -1 ? anwserArray[answerIndex].answer : '';
  };

  const getAdditionalRequirementAnswers = (ar, ind) => {
    const anwserArray = [...answers];
    const answerIndex = anwserArray.findIndex(
      (x) => x.question_id === questions[currentQuestionNumber - 1].id
    );
    if (answerIndex === -1) {
      return '';
    }
    const answerObject = anwserArray[answerIndex];
    const arIndex = ind;
    return arIndex !== -1
      ? answerObject.additional_requirements[arIndex]?.answer : '';
  };
  const updateAnswers = (answer) => {
    const anwserArray = [...answers];
    if (anwserArray.length === 0) {
      anwserArray.push({
        question_id: questions[currentQuestionNumber - 1].id,
        answer,
        security_assessment_id: params.id,
        additional_requirements: []
      });
    } else {
      const answerIndex = anwserArray.findIndex(
        (x) => x.question_id === questions[currentQuestionNumber - 1].id
      );
      if (answerIndex !== -1) {
        const answerObject = anwserArray[answerIndex];
        answerObject.answer = answer;
        anwserArray[answerIndex] = answerObject;
      } else {
        anwserArray.push({
          question_id: questions[currentQuestionNumber - 1].id,
          answer,
          security_assessment_id: params.id,
          additional_requirements: []
        });
      }
    }
    setAnswers(anwserArray);
  };
  const handleMultiSelectChange = (answer) => {
    updateAnswers(answer);
  };
  const updateAdditionalRequirement = (answer, ar, index) => {
    const anwserArray = [...answers];
    if (anwserArray.length === 0) {
      anwserArray.push({
        question_id: questions[currentQuestionNumber - 1].id,
        answer: '',
        security_assessment_id: params.id,
        additional_requirements: [
          {
            // type: ar.type,
            text: ar.text,
            answer
          }
        ]
      });
    } else {
      const answerIndex = anwserArray.findIndex(
        (x) => x.question_id === questions[currentQuestionNumber - 1].id
      );
      if (answerIndex !== -1) {
        const answerObject = anwserArray[answerIndex];
        const arIndex = index;
        if (arIndex !== -1) {
          answerObject.additional_requirements[arIndex] = {
            // type: ar.type,
            text: ar.text,
            answer
          };
        } else {
          answerObject.additional_requirements.push({
            // type: ar.type,
            text: ar.text,
            answer
          });
        }
        anwserArray[answerIndex] = answerObject;
      } else {
        anwserArray.push({
          question_id: questions[currentQuestionNumber - 1].id,
          answer: '',
          security_assessment_id: params.id,
          additional_requirements: [
            {
              // type: ar.type,
              text: ar.text,
              answer
            }
          ]
        });
      }
    }
    setAnswers(anwserArray);
  };
  const handleChange = (evt) => {
    const answer = evt.target.value;
    updateAnswers(answer);
  };

  const handleAdditionalRequirementChange = (evt, ar, index) => {
    const answer = evt.target.value;
    updateAdditionalRequirement(answer, ar, index);
  };

  const removeFile = async (index) => {
    await deleteFile(getFileUrl(index));
    const anwserArray = [...answers];
    const answerIndex = answers.findIndex(
      (x) => x.question_id === questions[currentQuestionNumber - 1].id
    );
    anwserArray[answerIndex].additional_requirements[index] = [];
    setAnswers(anwserArray);
  };

  const isUploaded = (index) => {
    const answerIndex = answers.findIndex(
      (x) => x.question_id === questions[currentQuestionNumber - 1].id
    );
    if (answers[answerIndex]?.additional_requirements[index]?.fileName === null) {
      return false;
    }
    return true;
  };

  const getInputComponent = (question) => {
    switch (question.type) {
      case 'Multiple Choice - Single Answer':
        return (
          <SingleSelect
            options={question.answers}
            handleChange={handleChange}
            value={getCurrentAnswers()}
          />
        );
      case 'Multiple Choice - Multiple Answer':
        return (
          <MultiSelect
            options={question.answers}
            handleChange={handleMultiSelectChange}
            answers={getCurrentAnswers() ? getCurrentAnswers() : []}
          />
        );
      case 'Dropdown':
        return (
          <Dropdown
            options={question.answers}
            handleChange={handleChange}
            value={getCurrentAnswers()}
          />
        );
      case 'Yes/No':
        return (
          <YesNoInput handleChange={handleChange} value={getCurrentAnswers()} />
        );
      case 'Input Text':
        return (
          <InputText handleChange={handleChange} value={getCurrentAnswers()} />
        );
      default:
        return null;
    }
  };

  const getAdditionalRequirementsComponents = (
    additional_requirement,
    index
  ) => {
    switch (additional_requirement.type) {
      case 'Input Text':
        return (
          <div key={index} className="ar-container">
            <Typography className="ar-title">
              {additional_requirement.text}
            </Typography>
            <InputText
              handleChange={(e) => handleAdditionalRequirementChange(
                e, additional_requirement, index
              )}
              value={getAdditionalRequirementAnswers(additional_requirement, index)}
            />
          </div>
        );
      case 'File Upload':
        return (
          <>
            <div
              key={index}
              className="type-attach-div"
              style={{ display: 'flex' }}
            >
              <Button disabled={!isFilled()} variant="text" component="label" className="sq-attach-text">
                <AttachIcon className="attach-icon" />
                {additional_requirement.text}
                <input
                  type="file"
                  hidden
                  onChange={(event) => {
                    selectFile(event, additional_requirement.text, index);
                  }}
                />
              </Button>
              {isUploaded(index)
                ? (
                  <Typography className="sq-selected-file">
                    {getFileName(index)}
                  </Typography>
                )
                : ''}
              {isUploaded(index)
                ? (
                  <div className="sq-selected-file-rmv" onClick={() => removeFile(index)}>
                    {getDeleteIcon(index)}
                  </div>
                )
                : ''}
            </div>
            <div>
              <Grid>
                {uploading ? (
                  <CircularProgress size={25} className="sq-upload-progress" />
                ) : ('')}
              </Grid>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    getSecurityQuestionnaire();
  }, []);

  useEffect(() => {
    if (totalQuestions !== 0 && currentQuestionNumber !== 0) {
      setProgressWidth((currentQuestionNumber / totalQuestions) * 100);
    }
  }, [currentQuestionNumber, totalQuestions]);

  return (
    <>
      {/* layout Section start */}
      {loading ? (
        <div className="loaderDiv">
          <CircularProgress className="progress" size={150} />
        </div>
      ) : openModal ? (
        <SuccessPage
          open={openModal}
          icons={SuccessIcon}
          heading="Thank You"
          messages={<> Based on your answers, we will evaluate your security and comeback to you</>}
          btnName1="Ok"
          btnAction1={() => {
            history.push('/assessment-history');
          }}
        />
      ) : failureToast ? (
        <SuccessPage
          open={failureToast}
          icons={ErrorIcon}
          heading="Error"
          messages={<>Some error occured, Please try again</>}
          btnName1="Try again"
          btnAction1={() => {
            setFailureToast(false);
          }}
        />
      ) : (
        <div className="layout-container">
          <Grid className="area-container" container>
            <Grid item xs>
              <Grid className="header-item" item>
                <Header />
              </Grid>
              <Grid className="sq-item" item>
                <Grid container className="sq-container">
                  <Grid item xs={3}>
                    <img
                      src={SecurityQuestionnaireImage}
                      alt="security-questionnaire"
                      width="100%"
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Grid container className="sq-number-container">
                      <Typography className="sq-total-typography">
                        {currentQuestionNumber}
                        of
                        {totalQuestions}
                      </Typography>
                    </Grid>
                    <ProgressBar progressWidth={progressWidth} />
                    <Grid container className="sq-question-container">
                      <Grid item className="question-grid" xs>
                        <Typography className="question-id">
                          {currentQuestionNumber >= 1
                            && questions[currentQuestionNumber - 1].id}
                        </Typography>
                        <Typography className="question-title">
                          {currentQuestionNumber >= 1
                            && questions[currentQuestionNumber - 1].question}
                        </Typography>
                        <Grid container className="question-input-container">
                          {getInputComponent(
                            currentQuestionNumber >= 1
                            && questions[currentQuestionNumber - 1]
                          )}
                        </Grid>
                        <Grid
                          container
                          className="additional-questions-container"
                        >
                          {currentQuestionNumber >= 1
                            && questions[
                              currentQuestionNumber - 1
                            ].additional_requirement
                              .map((req, index) => getAdditionalRequirementsComponents(req, index))}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container className="sq-button-container">
                      <Grid item xs={12}>
                        {currentQuestionNumber > 1 && (
                          <Button
                            disabled={uploading}
                            data-testid="btn-back"
                            fullWidth
                            variant="outlined"
                            className="back-btn"
                            onClick={goBack}
                          >
                            Back
                          </Button>
                        )}
                        {currentQuestionNumber < totalQuestions ? (
                          <Button
                            disabled={uploading || !isFilled()}
                            data-testid="btn-next"
                            className={!isFilled() ? 'next-btn' : 'next-btn-active'}
                            onClick={goNext}
                          >
                            Next
                          </Button>
                        ) : (
                          <Button
                            data-testid="btn-submit"
                            disabled={uploading || !isFilled()}
                            className={!isFilled() ? 'next-btn' : 'next-btn-active'}
                            onClick={onSubmit}
                          >
                            Submit
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={sToast} autoHideDuration={2500} onClose={handleSuccessClose}>
            <Alert variant="filled" severity="success" onClose={handleSuccessClose}>
              File Uploaded
            </Alert>
          </Snackbar>
          <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={fToast} autoHideDuration={2500} onClose={handleFailureClose}>
            <Alert variant="filled" severity="error" onClose={handleFailureClose}>
              {fMsg}
            </Alert>
          </Snackbar>
        </div>
      )}
      {/* layout Section end */}
    </>
  );
};

export default SecurityQuestionnaire;
