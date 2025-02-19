import React from 'react';
import { Col, Row, Button, Skeleton } from 'antd';

import './index.less';
import { AuctionView, useArt } from '../../hooks';
import { ArtContent } from '../ArtContent';
import { AuctionCard } from '../AuctionCard';
import { Link } from 'react-router-dom';

interface IPreSaleBanner {
  auction?: AuctionView;
}

export const PreSaleBanner = ({ auction }: IPreSaleBanner) => {
  const id = auction?.thumbnail.metadata.pubkey;
  const art = useArt();

  if (!auction) {
    return <Skeleton />;
  }

  return (
    <Row className="presale">
      <Col md={12} className="explore">
        <ArtContent
          pubkey={id}
          className="artwork-image"
        />
      </Col>
      <Col md={12} className="presale-info">
        <h2 className="art-title">
          {art.title}
        </h2>
        <AuctionCard
          auctionView={auction}
          style={{
            background: 'transparent',
            width: '100%',
            padding: 0,
            margin: 0,
          }}
          hideDefaultAction={true}
          action={
            <>
              <Link to={`/auction/${auction.auction.pubkey.toBase58()}`}>
                <Button
                  type="primary"
                  size="large"
                  className="action-btn"
                  style={{ maxWidth: 290 }}
                >
                  Go to auction
                </Button>
              </Link>
            </>
          }
        />
      </Col>
    </Row>
  );
};
