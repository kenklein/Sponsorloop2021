import {Student} from '../_models/student';

export const STUDENT_DATA: Student[] = [
  {
    name: 'Tessa Klomp',
    team: 'Codex',
    amount: 9.33,
    amountRaised: 18,
    description: 'De zondag starten met een lange wandeling naar de Maarsseveense plassen 🚶‍♀‍',
    imageSource: 'assets/runs/run_tessa_klomp.png',
    imageaction: 'assets/action_run/action_tessa_klomp.png',
  },
  {
    name: 'Jildou Valkema',
    team: 'U.T.V.',
    amount: 6,
    amountRaised: 6,
    description: '',
    imageSource: 'assets/runs/run_jildou_valkema.png',
    imageaction: 'assets/action_run/none_action.png',
  },
  {
    name: 'Lisa de Winter',
    team: 'U.T.V.',
    amount: 8,
    amountRaised: 16,
    description: 'Ik loop voor YSWR, maar mijn 8km is niks vergeleken met de hardlopers daar. ' +
      'Standaard elke zaterdag 20km rennen met elkaar. Dat noem ik pas doorzetten ❤️ ' +
      'Ooit in de verre toekomst loop ik een keer met ze mee ! #strongertogether',
    imageSource: 'assets/runs/run_lisa_de_winter.png',
    imageaction: 'assets/action_run/none_action.png',
  },

];
