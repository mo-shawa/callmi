export type FAQ = {
  question: string
  answer: string
}

type FaqItemProps = FAQ & {
  isLast: boolean
}

export default function FaqItem({ question, answer, isLast }: FaqItemProps) {
  return (
    <>
      <div className="collapse">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-2xl font-semibold">{question}</div>
        <div className="collapse-content">
          <p>{answer}</p>
        </div>
      </div>
      {!isLast && <span className="divider" />}
    </>
  )
}
