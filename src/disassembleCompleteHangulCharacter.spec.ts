import { disassembleCompleteHangulCharacter } from './disassembleCompleteHangulCharacter';

describe('disassembleCompleteHangulCharacter', () => {
  it('값', () => {
    expect(disassembleCompleteHangulCharacter('값')).toEqual({
      first: 'ㄱ',
      middle: 'ㅏ',
      last: 'ㅂㅅ',
    });
  });

  it('리', () => {
    expect(disassembleCompleteHangulCharacter('리')).toEqual({
      first: 'ㄹ',
      middle: 'ㅣ',
      last: '',
    });
  });

  it('빚', () => {
    expect(disassembleCompleteHangulCharacter('빚')).toEqual({
      first: 'ㅂ',
      middle: 'ㅣ',
      last: 'ㅈ',
    });
  });

  it('박', () => {
    expect(disassembleCompleteHangulCharacter('박')).toEqual({
      first: 'ㅂ',
      middle: 'ㅏ',
      last: 'ㄱ',
    });
  });

  it('완전한 한글 문자열이 아니면 undefined를 반환해야 합니다.', () => {
    expect(disassembleCompleteHangulCharacter('ㄱ')).toBeUndefined;
    expect(disassembleCompleteHangulCharacter('ㅏ')).toBeUndefined;
  });
});
