export const DefaultHeadTags = () => {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/disney-plus-icon.ico" />
      <meta
        name="description"
        content="A fully interactive and responsive one to one multi-page disney+ clone web application build by Nikko Abucejo."
      />
      <meta property="og:image" content="/assets/images/og.png" />
    </>
  );
};

const Head = () => {
  return (
    <>
      <DefaultHeadTags />
      <title>Disney+</title>
    </>
  );
};

export default Head;
