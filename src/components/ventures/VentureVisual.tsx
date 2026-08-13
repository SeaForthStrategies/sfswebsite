import type { Venture } from '@/data/ventures';

type VentureVisualProps = {
  venture: Venture;
  detail?: boolean;
};

export function VentureVisual({ venture, detail = false }: VentureVisualProps) {
  return (
    <div
      className={`venture-visual venture-visual--${venture.visual}${detail ? 'venture-visual--detail' : ''}`}
      aria-hidden="true"
    >
      <div className="venture-visual-header">
        <span>{venture.name}</span>
        <span>{venture.stage}</span>
      </div>
      <div className="venture-visual-body">{visualBody(venture.visual)}</div>
      <p className="venture-visual-caption">A Seaforth venture</p>
    </div>
  );
}

function visualBody(visual: Venture['visual']) {
  switch (visual) {
    case 'dating':
      return null;
    case 'life-feed':
      return (
        <div className="feed-composition">
          <p className="feed-date">Today</p>
          <div className="feed-entry feed-entry--feature">
            <span>People</span>
            <strong>The moments worth keeping</strong>
          </div>
          <div className="feed-entry">
            <span>Places</span>
            <p>Somewhere new, held close.</p>
          </div>
          <div className="feed-entry">
            <span>Life</span>
            <p>Your days, in one continuous feed.</p>
          </div>
        </div>
      );
    case 'community':
      return (
        <div className="community-composition">
          <div className="community-date">
            <span>SA</span>
            <strong>14</strong>
            <p>Gather</p>
          </div>
          <div className="community-details">
            <p>Salt &amp; Serendipity</p>
            <strong>
              Good people.
              <br />
              Shared places.
            </strong>
            <span>Community / Events / Connection</span>
          </div>
        </div>
      );
    case 'time':
      return (
        <div className="time-composition">
          <div className="time-heading">
            <span>This week</span>
            <strong>Time card</strong>
          </div>
          <ol>
            {['M', 'T', 'W', 'T', 'F'].map((day, index) => (
              <li key={`${day}-${index}`}>
                <span>{day}</span>
                <strong>{index === 4 ? 'Sent' : 'Log'}</strong>
              </li>
            ))}
          </ol>
          <p className="time-status">
            <span /> Submitted by email
          </p>
        </div>
      );
    case 'signal':
      return (
        <div className="signal-composition">
          <div className="signal-request">
            <span>POST</span>
            <code>/v1/explain</code>
          </div>
          <div className="signal-code">
            <code>
              <span>&#123;</span>
              <span>&nbsp;&nbsp;&quot;metric&quot;: &quot;activation&quot;,</span>
              <span>&nbsp;&nbsp;&quot;change&quot;: &quot;detected&quot;</span>
              <span>&#125;</span>
            </code>
          </div>
          <p>
            <span>Signal</span> One clear explanation.
          </p>
        </div>
      );
  }
}
