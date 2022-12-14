interface Props {
  children?: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <head />
      <body>{children}</body>
    </html>
  );
};
export default AuthLayout;
