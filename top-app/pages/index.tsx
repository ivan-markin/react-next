import { useEffect, useState } from 'react';
import { Button, Title, ParagraphText, Tag, Rating } from '../components';

export default function Home() {
  const [counter, setCounter] = useState<number>(0);  
  
  return (
    <>
      <Title tag='h1'>Заголовок { counter }</Title>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
      <Button appearance='secondary' onClick={() => setCounter(x => x - 1)}>Кнопка</Button>
      <ParagraphText size='s'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus magni eaque est dolorum possimus sit.<br/>Libero neque corrupti molestiae modi ab voluptatum, perspiciatis laborum dolorum sapiente et possimus illum.
      </ParagraphText>
      <ParagraphText size='m'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus magni eaque est dolorum possimus sit.<br/>Libero neque corrupti molestiae modi ab voluptatum, perspiciatis laborum dolorum sapiente et possimus illum.
      </ParagraphText>
      <ParagraphText size='l'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatibus magni eaque est dolorum possimus sit.<br/>Libero neque corrupti molestiae modi ab voluptatum, perspiciatis laborum dolorum sapiente et possimus illum.
      </ParagraphText>
      <Tag size='m' color='red'>Красный тег</Tag>
      <Tag size='s' color='green'>Зеленый тег</Tag>
      <Tag size='m' color='ghost' href='https://yandex.ru'>Прозрачный тег со ссылкой</Tag>
      <Rating rating={4} />
    </>
  );
}
