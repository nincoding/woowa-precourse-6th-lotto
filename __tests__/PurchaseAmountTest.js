import PurchaseAmount from '../src/domain/PurchaseAmount.js';
import { ERROR_MESSAGE } from '../src/constants/messages.js';

describe('PurchaseAmount', () => {
  test.each([2500, '', '구입금액'])(
    '구입 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.',
    ({ invalidAmount }) => {
      expect(() => new PurchaseAmount(invalidAmount)).toThrowError(ERROR_MESSAGE.invalidAmount);
    }
  );

  test('유효한 구입 금액으로 구입한 장 수를 구한다. ', () => {
    const validAmount = 3000;
    const purchaseAmount = new PurchaseAmount(validAmount);

    expect(purchaseAmount.getAmount()).toBe(3);
  });
});
