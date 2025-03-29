export interface Publication {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
}

export const publications: Publication[] = [
  {
    id: '1',
    title: 'The Importance of Early Dental Care for Children',
    excerpt: 'Learn why early dental care is crucial for your child\'s oral health and overall well-being.',
    content: `Early dental care is fundamental to a child's overall health and development. Here's why it matters:

1. Prevention of Dental Problems
Regular dental check-ups from an early age help prevent common issues like cavities and gum disease. Early detection means simpler and less invasive treatments.

2. Development of Healthy Habits
Starting dental care early helps children develop good oral hygiene habits that last a lifetime. This includes proper brushing techniques, flossing, and understanding the importance of regular dental visits.

3. Building Trust and Comfort
Early exposure to dental care helps children become comfortable with dental visits, reducing anxiety and fear in the future.

4. Monitoring Growth and Development
Regular check-ups allow dentists to monitor the development of your child's teeth and jaw, identifying any potential issues early.

5. Nutritional Guidance
Dentists can provide valuable advice about diet and nutrition that affects oral health, helping parents make informed decisions about their child's diet.

Remember, the American Academy of Pediatric Dentistry recommends that children visit a dentist by their first birthday or when their first tooth appears.`,
    date: '2024-03-15',
    author: 'Dr. Smile',
    category: 'Pediatric Dentistry',
    imageUrl: '/images/publications/early-dental-care.jpg'
  },
  {
    id: '2',
    title: 'Common Dental Myths Debunked',
    excerpt: 'Separating fact from fiction in pediatric dental care.',
    content: `There are many misconceptions about children's dental health. Let's debunk some common myths:

1. "Baby teeth don't matter because they fall out anyway"
This is one of the most harmful myths. Baby teeth are crucial for:
- Proper speech development
- Maintaining space for permanent teeth
- Chewing and nutrition
- Self-esteem and social development

2. "Children don't need to floss"
Actually, flossing is important as soon as teeth touch each other. It helps prevent cavities between teeth.

3. "Sugar is the only cause of cavities"
While sugar is a major factor, cavities can also be caused by:
- Poor oral hygiene
- Acidic foods and drinks
- Genetics
- Frequency of eating (not just what you eat)

4. "Children don't need fluoride toothpaste"
Fluoride is safe and effective when used properly. Use a rice-sized amount for children under 3 and a pea-sized amount for older children.

5. "Dental visits are only needed when there's a problem"
Regular check-ups are essential for prevention and early detection of issues.`,
    date: '2024-03-10',
    author: 'Dr. Smile',
    category: 'Dental Education',
    imageUrl: '/images/publications/dental-myths.jpg'
  },
  {
    id: '3',
    title: 'Making Dental Visits Fun for Kids',
    excerpt: 'Tips and strategies to make dental appointments enjoyable for children.',
    content: `Creating a positive dental experience for children is crucial for their long-term oral health. Here's how we make dental visits fun and comfortable:

1. Child-Friendly Environment
Our clinic is designed with children in mind:
- Bright, cheerful colors
- Play area in the waiting room
- Child-sized furniture
- Friendly staff trained in pediatric care

2. Positive Reinforcement
We use various techniques to encourage good behavior:
- Stickers and small rewards
- Praise for cooperation
- Age-appropriate explanations
- Interactive demonstrations

3. Distraction Techniques
We employ several methods to keep children comfortable:
- TV shows during treatment
- Interactive games
- Storytelling
- Guided imagery

4. Parental Involvement
Parents play a crucial role:
- Setting a positive example
- Using positive language
- Maintaining regular dental care at home
- Following up on dental recommendations

5. Special Care for Anxious Children
For children who are particularly anxious:
- Gradual exposure to dental procedures
- Extra time for familiarization
- Special attention to comfort
- Parent presence when appropriate

Remember, early positive experiences set the foundation for a lifetime of good oral health habits.`,
    date: '2024-03-05',
    author: 'Dr. Smile',
    category: 'Patient Care',
    imageUrl: '/images/publications/fun-dental-visits.jpg'
  }
]; 