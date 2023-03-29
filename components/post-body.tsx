import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className='max-w-full mx-auto bg-blue-700'>
      <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
