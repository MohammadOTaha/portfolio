import CommandsOutputs from '../public/commands.json';

export default function executeCommand(command: string): string {
  if (command === '') {
    return '';
  }

  if (CommandsOutputs[command as keyof typeof CommandsOutputs]) {
    return CommandsOutputs[command as keyof typeof CommandsOutputs];
  }

  return `Command \'${command}\' not found`;
}