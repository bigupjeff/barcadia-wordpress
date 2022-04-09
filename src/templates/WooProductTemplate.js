import React from "react"
import Seo from "../components/SEO"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import BannerModule from "../components/BannerModule/WooBannerModule"
import Faq from "../components/Faq/WooFaq"
import Features from "../components/Features/WooFeaturedProducts"

const ProductTemplateStyles = styled.div`
	.container {
		display: flex;
		flex-wrap: wrap;
		.column {
			flex: 0 0 100%;

			@media (min-width: 768px) {
				flex-basis: 50%;

				&:nth-child(1) {
					padding-right: 20px;
				}

				&:nth-child(2) {
					padding-left: 20px;
				}

				> * {
					&:last-child {
						margin-bottom: 0;
					}
				}
			}

			> * {
				&:first-child {
					margin-top: 0;
				}
			}
		}
	}
`

const ProductGallery = styled.section`
	width: 100%;

	> .container {
		display: flex;
		flex-wrap: wrap;
		gap: calc(var(--gap) / 2);

		@media (min-width: 1024px) {
			gap: var(--gap);
		}

		> * {
			width: calc(50% - 10px);

			@media (min-width: 768px) {
				width: calc(33.333% - 14px);
			}

			@media (min-width: 1024px) {
				width: calc(25% - 30px);
			}
		}
	}
`

const ProductTemplate = (wcProducts) => {
	const {
		headerImage,
		name,
		price,
		short_description,
		description,
		attributes,
		images,
	} = wcProducts
	const productHeaderImage = headerImage
		? getImage(headerImage[0].localFile.childImageSharp)
		: null
	const headerImageAltText = headerImage.alt

	return (
		<>
			<Seo title={name} />
			<BannerModule
				title={name}
				price={price}
				subTitle={short_description}
				enquire={true}
			>
				<GatsbyImage
					className="banner__image"
					image={productHeaderImage}
					alt={headerImageAltText || name}
				/>
			</BannerModule>
			<ProductTemplateStyles className="section">
				<div className="container container__tight">
					{description && (
						<div
							className="column"
							dangerouslySetInnerHTML={{ __html: description }}
						/>
					)}
					{attributes && (
						<div className="column">
							{attributes.map((item, index) => {
								return (
									<Faq
										key={index}
										title={item.name}
										description={item.options}
									/>
								)
							})}
						</div>
					)}
				</div>
			</ProductTemplateStyles>
			{images && (
				<ProductGallery className="section">
					<div className="container container__tight">
						{images.map((item, index) => {
							let galleryImage = getImage(
								item.localFile.childImageSharp
							)
							let galleryAltText = item.alt
							return (
								<GatsbyImage
									key={index}
									image={galleryImage}
									alt={galleryAltText}
								/>
							)
						})}
					</div>
				</ProductGallery>
			)}
			<Features
				title="Featured Products from Barcadia."
				introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
			/>
		</>
	)
}

export default ProductTemplate
