import CommandsOutputs from '../public/commands.json';

export default function executeCommand(command: string): string {
  if (CommandsOutputs[command as keyof typeof CommandsOutputs]) {
    return CommandsOutputs[command as keyof typeof CommandsOutputs];
  }

  return `Command \'${command}\' not found`;
}