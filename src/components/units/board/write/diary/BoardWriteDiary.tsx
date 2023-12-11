import React, {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
} from 'react';
import * as S from './BoardWriteDiary.styles';
// import { checkValidationFile } from 'src/components/commons/utills/imageValidation';
import { useNavigate } from 'react-router-dom';
import { IoMdHeart, IoIosHeartHalf } from 'react-icons/io';
// import ConfrimModal from 'src/components/commons/modals/confirm/confirmModal';
import 'react-toggle/style.css';
import { IoIosCheckmark } from 'react-icons/io';
import Animation from 'src/components/commons/utills/Animation/Animation';
import Animation2 from 'src/components/commons/utills/Animation/Animation2';

const BoardWriteDiary = () => {
  // const [isActive, setIsActive] = useState<boolean>(false);
  // const [imgFile, setImgFile] = useState<File | null>();
  // const [preview, setPreview] = useState<string | null>('');
  // const buttonRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // 2
  // const onChangeImg = (event: ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files !== null) {
  //     const file = event.target.files[0];
  //     if (file && file.type.substring(0, 5) === 'image') {
  //       setImgFile(file);
  //       setIsActive(true);
  //     } else {
  //       setImgFile(null);
  //       setIsActive(true);
  //     }
  //   }
  // };

  // const onClickButton = () => {
  //   buttonRef.current.click();
  // };

  // const onClickSubmitBtn = () => {
  //   setIsModalOpen((prev) => !prev);
  // };

  // const onClickMoveToMain = () => {
  //   navigate('/main');
  // };

  // 3
  // useEffect(() => {
  //   if (imgFile) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreview(reader.result as string);
  //     };
  //     reader.readAsDataURL(imgFile);
  //   } else {
  //     setPreview(null);
  //   }
  // }, [imgFile]);
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(true); //이걸로 나중에 점수 확 높히기
  const [contents, setContents] = useState<string>('');

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  //토글버튼
  setIsChecked;
  const onChangeToggleHandler = () => {
    setIsChecked(!isChecked);
  };

  //onClickNextBtn
  const onClickPrevPage = () => {
    navigate('/post');
  };
  const onClickNextBtn = () => {
    navigate('/post2');
  };

  //로컬스토리지에 저장
  localStorage.setItem('contents', contents);

  return (
    <Animation2>
      <>
        {/* {isModalOpen && (
        <ConfrimModal
          onClickMoveToMain={onClickMoveToMain}
          onClickSubmitBtn={onClickSubmitBtn}
        />
      )} */}
        <S.DiaryContainerDiv>
          <S.DiaryWrapperUPDiv>
            <S.HeaderButtonBoxDiv>
              <S.HeaderLine></S.HeaderLine>
              <S.HeaderFlexBox>
                <S.DoneCheckBox>
                  <IoIosCheckmark style={{ fontSize: '21px' }} />
                  <S.OneBlackSpan />
                </S.DoneCheckBox>
                <S.ThreeFilledSpan>Text</S.ThreeFilledSpan>
                <S.TwoBlankSpan />
              </S.HeaderFlexBox>
            </S.HeaderButtonBoxDiv>
          </S.DiaryWrapperUPDiv>
          <S.DiaryWrapperDOWNdiv>
            <S.ContentsWrapperDiv>
              {/* <h3>오늘을 대표하는 사진</h3> */}
              {/* <S.ImageBoxDiv>
          <div>
            {!isActive && <S.PicutureImg src='/avatar.png' alt='엑박' />}
            {isActive && <S.PicutureImg src={preview as string} alt='엑박' />}
          </div>
        </S.ImageBoxDiv> */}
              {/* <S.ImagePlustButtonBox>
          <S.HiddenInput
            name='img'
            type='file'
            accept='image/*'
            onChange={onChangeImg}
            className='hidden'
            ref={buttonRef}
          />
          <S.ImageButton onClick={onClickButton}>사진 추가</S.ImageButton>
        </S.ImagePlustButtonBox> */}
              <S.InputBoxDiv>
                <S.DiaryTitleDiv>
                  <S.DiaryWriteTitleH3>
                    오늘의 일기를 작성해보세요
                  </S.DiaryWriteTitleH3>
                  <S.TextAreaCount>{contents.length}/200</S.TextAreaCount>
                </S.DiaryTitleDiv>
                <S.InputDiv>
                  <S.ContentsTextarea onChange={onChangeContents} />
                  <S.InputFooterBoxDiv></S.InputFooterBoxDiv>
                </S.InputDiv>
              </S.InputBoxDiv>
              <S.DiaryToggleTitleDiv>
                <S.DiaryToggleP>오늘 하루 만족 하시나요?</S.DiaryToggleP>

                <label>
                  <S.CustomToggle
                    checked={isChecked}
                    icons={{
                      checked: <IoMdHeart />,
                      unchecked: <IoIosHeartHalf />,
                    }}
                    onChange={onChangeToggleHandler}
                  />
                  {/* <Toggle
                  checked={isChecked}
                  icons={{
                    checked: <IoMdHeart />,
                    unchecked: <IoIosHeartHalf />,
                  }}
                  onChange={onChangeToggleHandler}
                /> */}
                </label>
              </S.DiaryToggleTitleDiv>
            </S.ContentsWrapperDiv>

            <S.FooterButtonBoxDiv>
              <S.PrevButton onClick={onClickPrevPage}>이전</S.PrevButton>
              <S.NextButton onClick={onClickNextBtn}>다음</S.NextButton>
              {/* <div>
              <S.DiaryPrivateCheckboxDiv></S.DiaryPrivateCheckboxDiv>
              <p className='OpenPublicP'>전체공개 </p>
            </div> */}
            </S.FooterButtonBoxDiv>
          </S.DiaryWrapperDOWNdiv>
        </S.DiaryContainerDiv>
      </>
    </Animation2>
  );
};

export default BoardWriteDiary;

// const ToggleStyle = {
//   track: {
//     backgroundColor: 'gray',
//   },
//   thumb: {
//     backgroundColor: 'blue',
//   },
// };
