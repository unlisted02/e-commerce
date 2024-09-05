import netherlandsRecruiter from './shot.jpg';
import * as S from './style';

const Recruiter = () => (
  <S.Container>
    <S.Thumbnail>
      <img
        alt="Jeremy Akeze - Doghouse IT Recruitment"
        src={netherlandsRecruiter}
      />
    </S.Thumbnail>
    <S.Description>
      <h4>
        EyeC0nic
        {/* <S.Flag /> */}
      </h4>
      <p> 
        Hi! Shop with us today. Thank you!
      </p>
    </S.Description>
  </S.Container>
);

export default Recruiter;
