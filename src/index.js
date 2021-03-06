import BootstrapCommand from "./commands/BootstrapCommand";
import PublishCommand from "./commands/PublishCommand";
import UpdatedCommand from "./commands/UpdatedCommand";
import ImportCommand from "./commands/ImportCommand";
import CleanCommand from "./commands/CleanCommand";
import DiffCommand from "./commands/DiffCommand";
import InitCommand from "./commands/InitCommand";
import RunCommand from "./commands/RunCommand";
import ExecCommand from "./commands/ExecCommand";
import LsCommand from "./commands/LsCommand";
import { exposeCommands } from "./Command";

export const __commands__ = exposeCommands([
  BootstrapCommand,
  PublishCommand,
  UpdatedCommand,
  ImportCommand,
  CleanCommand,
  DiffCommand,
  InitCommand,
  RunCommand,
  ExecCommand,
  LsCommand,
]);
