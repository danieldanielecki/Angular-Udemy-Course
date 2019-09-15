export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactivate() {
    this.activeToInactiveCounter++;
    console.log('Activate to Inactivate: ' + this.activeToInactiveCounter);
  }

  incremenInactiveToActivate() {
    this.inactiveToActiveCounter++;
    console.log('Inactivate to activate: ' + this.inactiveToActiveCounter);
  }
}