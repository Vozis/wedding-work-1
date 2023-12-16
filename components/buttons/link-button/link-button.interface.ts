export interface ILinkButton
  extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  size?: 'small' | 'medium' | 'large';
  path?: string;
}
