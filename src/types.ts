export interface Minigame {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: 'Majitel' | 'Developer' | 'Moderátor' | 'Builder';
}