import './navigation';
import './customCommands';
import {
  addVrtTrackCommand,
  addVrtStartCommand,
  addVrtStopCommand,
  addVrtTrackBufferCommand,
  addVrtTrackBase64Command
} from '@visual-regression-tracker/agent-cypress/dist/commands';

addVrtStartCommand();
addVrtStopCommand();
addVrtTrackCommand();
addVrtTrackBufferCommand();
addVrtTrackBase64Command();
