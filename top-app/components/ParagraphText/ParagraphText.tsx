import { ParagraphTextProps } from './ParagraphText.props';
import cn from 'classnames';
import styles from './ParagraphText.module.css';

export const ParagraphText = ({ size = 'm', children, className, ...props }: ParagraphTextProps): JSX.Element => {
	return (
		<p className={cn(className, {
			[styles.s]: size == 's',
			[styles.m]: size == 'm',
			[styles.l]: size == 'l'
		})}
		{...props}
		>
			{ children }
		</p>							
	);	
};