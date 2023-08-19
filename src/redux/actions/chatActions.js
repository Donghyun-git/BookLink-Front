const CHATIN = 'CHATIN';
const CHATOUT = 'CHATOUT';

export const chatIn = (isChatIn) => {
  return {
    type: CHATIN,
    payload: { isChatIn },
  };
};
export const chatOut = (isChatIn) => {
  return {
    type: CHATOUT,
    payload: { isChatIn },
  };
};
