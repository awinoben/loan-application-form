console.log(this);
import { AppComponent } from './app.component';

const clasApp = new AppComponent(); 

describe('app component test', () => {
  it('should succeed', () => expect(true).toEqual(true));
  
  it('should have a defined component', () => {
    expect(clasApp).toBeDefined();
  });

  it('should have name variable in componet', () => {
    expect(clasApp.name).toBeDefined();
  });

  it('name variable should be equal to \'Loan Application Form\'', () => {
    expect(clasApp.name).toBe('Loan Application Form');
  });

  it('should have number version in component', () => {
    expect(clasApp.version).toBeDefined();
  });
  it('number variable should be equal to 1', () => {
    expect(clasApp.version).toEqual(1);
  });

});
