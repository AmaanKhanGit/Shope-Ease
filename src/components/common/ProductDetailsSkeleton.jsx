import "./ProductDetailsSkeleton.css";

const ProductDetailsSkeleton = () => {
  return (
    <div className="product-details-skeleton">
      <div className="breadcrumb-skeleton skeleton-card">
        <div className="breadcrumb-row">
          <div className="skeleton-block skeleton-breadcrumb" />
          <div className="breadcrumb-separator" />
          <div className="skeleton-block skeleton-breadcrumb short" />
          <div className="breadcrumb-separator" />
          <div className="skeleton-block skeleton-breadcrumb" />
        </div>
      </div>

      <div className="overview-skeleton skeleton-card">
        <div className="overview-grid">
          <div className="gallery-skeleton">
            <div className="skeleton-block skeleton-gallery" />
            <div className="thumbnails-skeleton">
              <div className="skeleton-block skeleton-thumb" />
              <div className="skeleton-block skeleton-thumb" />
              <div className="skeleton-block skeleton-thumb" />
              <div className="skeleton-block skeleton-thumb" />
            </div>
          </div>
          <div className="info-skeleton">
            <div className="skeleton-block skeleton-title" />
            <div className="skeleton-row gap-small">
              <div className="skeleton-block skeleton-rating" />
              <div className="skeleton-block skeleton-meta" />
            </div>
            <div className="skeleton-block skeleton-price" />
            <div className="skeleton-block skeleton-paragraph" />
            <div className="skeleton-block skeleton-paragraph short" />
            <div className="button-row-skeleton">
              <div className="skeleton-block skeleton-button" />
              <div className="skeleton-block skeleton-button secondary" />
            </div>
            <div className="benefits-skeleton">
              <div className="skeleton-block skeleton-benefit" />
              <div className="skeleton-block skeleton-benefit" />
              <div className="skeleton-block skeleton-benefit" />
              <div className="skeleton-block skeleton-benefit" />
            </div>
          </div>
        </div>
      </div>

      <div className="extra-info-skeleton skeleton-card">
        <div className="extra-info-grid">
          <div className="description-skeleton">
            <div className="skeleton-block skeleton-heading" />
            <div className="skeleton-block skeleton-paragraph" />
            <div className="skeleton-block skeleton-paragraph" />
            <div className="skeleton-block skeleton-paragraph short" />
          </div>
          <div className="details-skeleton">
            <div className="skeleton-block skeleton-heading" />
            <div className="details-table-skeleton">
              <div className="details-row-skeleton">
                <div className="skeleton-block skeleton-table-title" />
                <div className="skeleton-block skeleton-table-detail" />
              </div>
              <div className="details-row-skeleton">
                <div className="skeleton-block skeleton-table-title" />
                <div className="skeleton-block skeleton-table-detail" />
              </div>
              <div className="details-row-skeleton">
                <div className="skeleton-block skeleton-table-title" />
                <div className="skeleton-block skeleton-table-detail" />
              </div>
              <div className="details-row-skeleton">
                <div className="skeleton-block skeleton-table-title" />
                <div className="skeleton-block skeleton-table-detail" />
              </div>
              <div className="details-row-skeleton">
                <div className="skeleton-block skeleton-table-title" />
                <div className="skeleton-block skeleton-table-detail" />
              </div>
              <div className="details-row-skeleton">
                <div className="skeleton-block skeleton-table-title" />
                <div className="skeleton-block skeleton-table-detail" />
              </div>
              <div className="details-row-skeleton">
                <div className="skeleton-block skeleton-table-title" />
                <div className="skeleton-block skeleton-table-detail" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews-skeleton skeleton-card">
        <div className="review-header-skeleton">
          <div className="skeleton-block skeleton-heading short" />
          <div className="skeleton-block skeleton-meta short" />
        </div>
        <div className="reviews-grid-skeleton">
          <div className="review-card-skeleton">
            <div className="skeleton-block skeleton-rating" />
            <div className="skeleton-block skeleton-paragraph" />
            <div className="skeleton-block skeleton-paragraph short" />
            <div className="skeleton-block skeleton-paragraph shorter" />
          </div>
          <div className="review-card-skeleton">
            <div className="skeleton-block skeleton-rating" />
            <div className="skeleton-block skeleton-paragraph" />
            <div className="skeleton-block skeleton-paragraph short" />
            <div className="skeleton-block skeleton-paragraph shorter" />
          </div>
          <div className="review-card-skeleton">
            <div className="skeleton-block skeleton-rating" />
            <div className="skeleton-block skeleton-paragraph" />
            <div className="skeleton-block skeleton-paragraph short" />
            <div className="skeleton-block skeleton-paragraph shorter" />
          </div>
        </div>
      </div>

      <div className="related-skeleton skeleton-card">
        <div className="related-header-skeleton">
          <div className="skeleton-block skeleton-heading" />
          <div className="skeleton-block skeleton-meta short" />
        </div>
        <div className="related-carousel-skeleton">
          <div className="skeleton-card related-item-skeleton" />
          <div className="skeleton-card related-item-skeleton" />
          <div className="skeleton-card related-item-skeleton" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
