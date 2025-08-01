'use client';

import React, { useState } from 'react';
import { Button, Card, Input, Navigation, Carousel, Nav, Footer, Hero } from '@/components/ui';
import type { NavigationItem, CarouselItem } from '@/components/ui';
import { theme } from '@/lib/theme';

const ComponentsPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState('');

  const navigationItems: NavigationItem[] = [
    { label: 'ホーム', href: '/', active: false },
    { label: 'コンポーネント', href: '/components', active: true },
    { label: 'について', href: '/about', active: false },
    { label: 'お問い合わせ', href: '/contact', active: false },
  ];

  const pageStyles = {
    fontFamily: theme.typography.fontFamily.primary,
    backgroundColor: theme.colors.background.primary,
    minHeight: '100vh',
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `0 ${theme.spacing.lg}`,
  };

  const sectionStyles = {
    padding: `${theme.spacing['2xl']} 0`,
  };

  const titleStyles = {
    fontSize: theme.typography.fontSize['3xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
  };

  const subtitleStyles = {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing['2xl'],
  };

  const componentSectionStyles = {
    marginBottom: theme.spacing['3xl'],
  };

  const componentTitleStyles = {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.lg,
  };

  const demoGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  };

  const demoCardStyles = {
    padding: theme.spacing.lg,
  };

  const codeBlockStyles = {
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    fontSize: theme.typography.fontSize.sm,
    fontFamily: theme.typography.fontFamily.mono,
    overflow: 'auto',
    marginTop: theme.spacing.md,
    border: '1px solid #333',
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (value.length < 3 && value.length > 0) {
      setInputError('3文字以上入力してください。');
    } else {
      setInputError('');
    }
  };

  return (
    <div style={pageStyles}>
      {/* Navigation Demo */}
      <Navigation
        items={navigationItems}
        logo="Linear Design"
        actions={
          <div style={{ display: 'flex', gap: theme.spacing.sm }}>
            <Button variant="secondary" size="sm">
              ログイン
            </Button>
            <Button variant="primary" size="sm">
              始める
            </Button>
          </div>
        }
      />

      <div style={containerStyles}>
        <section style={sectionStyles}>
          <h1 style={titleStyles}>Linear Design System</h1>
          <p style={subtitleStyles}>
            モダンでミニマルなデザインシステムで構築された再利用可能なコンポーネントです。
          </p>

          {/* Button Components */}
          <div style={componentSectionStyles}>
            <h2 style={componentTitleStyles}>Buttonコンポーネント</h2>
            <div style={demoGridStyles}>
              <Card style={demoCardStyles}>
                <h3 style={{ marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>プライマリボタン</h3>
                <div style={{ display: 'flex', gap: theme.spacing.md, flexWrap: 'wrap' }}>
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </div>
                <pre style={codeBlockStyles}>
{`<Button variant="primary" size="md">
  Primary Button
</Button>`}
                </pre>
              </Card>

              <Card style={demoCardStyles}>
                <h3 style={{ marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>セカンダリボタン</h3>
                <div style={{ display: 'flex', gap: theme.spacing.md, flexWrap: 'wrap' }}>
                  <Button variant="secondary" size="sm">Small</Button>
                  <Button variant="secondary" size="md">Medium</Button>
                  <Button variant="secondary" size="lg">Large</Button>
                </div>
                <pre style={codeBlockStyles}>
{`<Button variant="secondary" size="md">
  Secondary Button
</Button>`}
                </pre>
              </Card>
            </div>
          </div>

          {/* Card Components */}
          <div style={componentSectionStyles}>
            <h2 style={componentTitleStyles}>Cardコンポーネント</h2>
            
            <h3 style={{ fontSize: theme.typography.fontSize.lg, fontWeight: theme.typography.fontWeight.medium, color: theme.colors.text.primary, marginBottom: theme.spacing.md }}>基本カード</h3>
            <div style={demoGridStyles}>
              <Card padding="sm">
                <h3 style={{ color: theme.colors.text.primary, marginBottom: theme.spacing.sm }}>スモールパディング</h3>
                <p style={{ color: theme.colors.text.secondary, fontSize: theme.typography.fontSize.sm }}>
                  小さなパディングを持つカードです。簡単な情報を表示する際に使用します。
                </p>
              </Card>

              <Card padding="md">
                <h3 style={{ color: theme.colors.text.primary, marginBottom: theme.spacing.sm }}>ミディアムパディング</h3>
                <p style={{ color: theme.colors.text.secondary, fontSize: theme.typography.fontSize.sm }}>
                  中程度のパディングを持つカードです。一般的なコンテンツに使用します。
                </p>
              </Card>

              <Card padding="lg">
                <h3 style={{ color: theme.colors.text.primary, marginBottom: theme.spacing.sm }}>ラージパディング</h3>
                <p style={{ color: theme.colors.text.secondary, fontSize: theme.typography.fontSize.sm }}>
                  大きなパディングを持つカードです。重要なコンテンツやフォームに使用します。
                </p>
              </Card>
            </div>

            <h3 style={{ fontSize: theme.typography.fontSize.lg, fontWeight: theme.typography.fontWeight.medium, color: theme.colors.text.primary, marginBottom: theme.spacing.md, marginTop: theme.spacing.xl }}>画像付きカード</h3>
            <div style={demoGridStyles}>
              <Card 
                padding="md"
                image="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20minimalist%20workspace%20with%20laptop%20and%20coffee%20cup%20on%20clean%20desk%20natural%20lighting&image_size=landscape_4_3"
                imageAlt="モダンなワークスペース"
                imageHeight="180px"
              >
                <h3 style={{ color: theme.colors.text.primary, marginBottom: theme.spacing.sm }}>ワークスペース</h3>
                <p style={{ color: theme.colors.text.secondary, fontSize: theme.typography.fontSize.sm }}>
                  モダンでミニマルなワークスペースの画像付きカードです。
                </p>
              </Card>

              <Card 
                padding="md"
                image="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20nature%20landscape%20with%20mountains%20and%20lake%20sunset%20colors&image_size=landscape_4_3"
                imageAlt="美しい自然の風景"
                imageHeight="180px"
              >
                <h3 style={{ color: theme.colors.text.primary, marginBottom: theme.spacing.sm }}>自然の風景</h3>
                <p style={{ color: theme.colors.text.secondary, fontSize: theme.typography.fontSize.sm }}>
                  美しい山と湖の風景を表示する画像付きカードです。
                </p>
              </Card>

              <Card 
                padding="md"
                image="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20architecture%20building%20glass%20facade%20urban%20design%20clean%20lines&image_size=landscape_4_3"
                imageAlt="モダン建築"
                imageHeight="180px"
              >
                <h3 style={{ color: theme.colors.text.primary, marginBottom: theme.spacing.sm }}>モダン建築</h3>
                <p style={{ color: theme.colors.text.secondary, fontSize: theme.typography.fontSize.sm }}>
                  現代的な建築デザインを表示する画像付きカードです。
                </p>
              </Card>
            </div>

            <pre style={codeBlockStyles}>
{`// 基本カード
<Card padding="md" hover={true}>
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</Card>

// 画像付きカード
<Card 
  padding="md"
  image="/path/to/image.jpg"
  imageAlt="画像の説明"
  imageHeight="200px"
>
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</Card>`}
            </pre>
          </div>

          {/* Input Components */}
          <div style={componentSectionStyles}>
            <h2 style={componentTitleStyles}>Inputコンポーネント</h2>
            <div style={demoGridStyles}>
              <Card style={demoCardStyles}>
                <h3 style={{ marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>基本Input</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
                  <Input
                    label="名前"
                    placeholder="名前を入力してください"
                    size="sm"
                  />
                  <Input
                    label="メールアドレス"
                    type="email"
                    placeholder="email@example.com"
                    size="md"
                    helperText="有効なメールアドレスを入力してください"
                  />
                  <Input
                    label="メッセージ"
                    placeholder="メッセージを入力してください"
                    size="lg"
                  />
                </div>
              </Card>

              <Card style={demoCardStyles}>
                <h3 style={{ marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>状態別Input</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
                  <Input
                    label="バリデーションテスト"
                    value={inputValue}
                    onChange={handleInputChange}
                    error={inputError}
                    placeholder="3文字以上入力してください"
                  />
                  <Input
                    label="無効化されたInput"
                    placeholder="無効化されています"
                    disabled
                  />
                  <Input
                    label="読み取り専用Input"
                    value="読み取り専用の値"
                    readOnly
                  />
                </div>
              </Card>
            </div>
            <pre style={codeBlockStyles}>
{`<Input
  label="ラベル"
  placeholder="プレースホルダー"
  error="エラーメッセージ"
  helperText="ヘルプテキスト"
  size="md"
/>`}
            </pre>
          </div>

          {/* Hero Component */}
          <div style={componentSectionStyles}>
            <h2 style={componentTitleStyles}>Heroコンポーネント</h2>
            <div style={{ marginBottom: theme.spacing.xl }}>
              <Card style={demoCardStyles}>
                <h3 style={{ marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>基本ヒーロー</h3>
                <div style={{ marginBottom: theme.spacing.md }}>
                  <Hero />
                </div>
                <p style={{ color: theme.colors.text.secondary, marginBottom: theme.spacing.md }}>
                  メインページのヒーローセクションです。
                </p>
              </Card>
            </div>
            <pre style={codeBlockStyles}>
{`<Hero />`}
            </pre>
          </div>

          {/* Nav Component */}
          <div style={componentSectionStyles}>
            <h2 style={componentTitleStyles}>Navコンポーネント</h2>
            <div style={{ marginBottom: theme.spacing.xl }}>
              <Card style={demoCardStyles}>
                <h3 style={{ marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>基本ナビゲーション</h3>
                <div style={{ marginBottom: theme.spacing.md }}>
                  <Nav />
                </div>
                <p style={{ color: theme.colors.text.secondary, marginBottom: theme.spacing.md }}>
                  シンプルなナビゲーションコンポーネントです。
                </p>
              </Card>
            </div>
            <pre style={codeBlockStyles}>
{`<Nav />`}
            </pre>
          </div>

          {/* Footer Component */}
          <div style={componentSectionStyles}>
            <h2 style={componentTitleStyles}>Footerコンポーネント</h2>
            <div style={{ marginBottom: theme.spacing.xl }}>
              <Card style={demoCardStyles}>
                <h3 style={{ marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>基本フッター</h3>
                <div style={{ marginBottom: theme.spacing.md }}>
                  <Footer />
                </div>
                <p style={{ color: theme.colors.text.secondary, marginBottom: theme.spacing.md }}>
                  ページ下部のフッターコンポーネントです。
                </p>
              </Card>
            </div>
            <pre style={codeBlockStyles}>
{`<Footer />`}
            </pre>
          </div>

          {/* Carousel Component */}
          <div style={componentSectionStyles}>
            <h2 style={componentTitleStyles}>Carouselコンポーネント</h2>
            <div style={{ marginBottom: theme.spacing.xl }}>
              <Card style={demoCardStyles}>
                <h3 style={{ marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>基本カルーセル</h3>
                <div style={{ height: '300px', marginBottom: theme.spacing.md }}>
                  <Carousel
                    items={[
                      {
                        id: '1',
                        content: (
                          <div style={{ 
                            height: '300px', 
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: theme.typography.fontSize['2xl'],
                            fontWeight: theme.typography.fontWeight.bold
                          }}>
                            スライド 1
                          </div>
                        )
                      },
                      {
                        id: '2',
                        content: (
                          <div style={{ 
                            height: '300px', 
                            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: theme.typography.fontSize['2xl'],
                            fontWeight: theme.typography.fontWeight.bold
                          }}>
                            スライド 2
                          </div>
                        )
                      },
                      {
                        id: '3',
                        content: (
                          <div style={{ 
                            height: '300px', 
                            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: theme.typography.fontSize['2xl'],
                            fontWeight: theme.typography.fontWeight.bold
                          }}>
                            スライド 3
                          </div>
                        )
                      }
                    ]}
                    autoPlay={true}
                    autoPlayInterval={4000}
                    showDots={true}
                    showArrows={true}
                  />
                </div>
                <p style={{ color: theme.colors.text.secondary, marginBottom: theme.spacing.md }}>
                  自動再生機能付きのカルーセルです。ナビゲーション矢印とドットインジケーターが含まれています。
                </p>
              </Card>
            </div>

            <div style={{ marginBottom: theme.spacing.xl }}>
              <Card style={demoCardStyles}>
                <h3 style={{ marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>画像カルーセル</h3>
                <div style={{ height: '250px', marginBottom: theme.spacing.md }}>
                  <Carousel
                    items={[
                      {
                        id: 'img1',
                        content: (
                          <div style={{ height: '250px', position: 'relative' }}>
                            <img
                              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20office%20interior%20design%20minimalist%20style%20natural%20lighting&image_size=landscape_16_9"
                              alt="モダンオフィス"
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                              color: 'white',
                              padding: theme.spacing.lg,
                            }}>
                              <h4 style={{ fontSize: theme.typography.fontSize.lg, fontWeight: theme.typography.fontWeight.semibold, marginBottom: theme.spacing.xs }}>モダンオフィス</h4>
                              <p style={{ fontSize: theme.typography.fontSize.sm }}>洗練されたオフィス空間のデザイン</p>
                            </div>
                          </div>
                        )
                      },
                      {
                        id: 'img2',
                        content: (
                          <div style={{ height: '250px', position: 'relative' }}>
                            <img
                              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=cozy%20living%20room%20scandinavian%20style%20warm%20lighting%20comfortable&image_size=landscape_16_9"
                              alt="居心地の良いリビング"
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                              color: 'white',
                              padding: theme.spacing.lg,
                            }}>
                              <h4 style={{ fontSize: theme.typography.fontSize.lg, fontWeight: theme.typography.fontWeight.semibold, marginBottom: theme.spacing.xs }}>居心地の良いリビング</h4>
                              <p style={{ fontSize: theme.typography.fontSize.sm }}>スカンジナビアスタイルの温かい空間</p>
                            </div>
                          </div>
                        )
                      },
                      {
                        id: 'img3',
                        content: (
                          <div style={{ height: '250px', position: 'relative' }}>
                            <img
                              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20kitchen%20design%20clean%20white%20marble%20countertops%20elegant&image_size=landscape_16_9"
                              alt="モダンキッチン"
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                              color: 'white',
                              padding: theme.spacing.lg,
                            }}>
                              <h4 style={{ fontSize: theme.typography.fontSize.lg, fontWeight: theme.typography.fontWeight.semibold, marginBottom: theme.spacing.xs }}>モダンキッチン</h4>
                              <p style={{ fontSize: theme.typography.fontSize.sm }}>エレガントな白いマーブルカウンター</p>
                            </div>
                          </div>
                        )
                      }
                    ]}
                    autoPlay={false}
                    showDots={true}
                    showArrows={true}
                  />
                </div>
                <p style={{ color: theme.colors.text.secondary, marginBottom: theme.spacing.md }}>
                  画像とテキストオーバーレイを含むカルーセルです。手動ナビゲーションで操作できます。
                </p>
              </Card>
            </div>

            <pre style={codeBlockStyles}>
{`<Carousel
  items={[
    {
      id: '1',
      content: <div>スライドコンテンツ</div>
    },
    {
      id: '2', 
      content: <div>スライドコンテンツ 2</div>
    }
  ]}
  autoPlay={true}
  autoPlayInterval={3000}
  showDots={true}
  showArrows={true}
/>`}
            </pre>
          </div>

          {/* Navigation Component */}
          <div style={componentSectionStyles}>
            <h2 style={componentTitleStyles}>Navigationコンポーネント</h2>
            <Card style={demoCardStyles}>
              <h3 style={{ marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>ナビゲーション例</h3>
              <p style={{ color: theme.colors.text.secondary, marginBottom: theme.spacing.md }}>
                ページ上部に固定されたナビゲーションバーを確認できます。ブラー効果と半透明の背景を使用しています。
              </p>
              <pre style={codeBlockStyles}>
{`<Navigation
  items={[
    { label: 'Home', href: '/', active: false },
    { label: 'Components', href: '/components', active: true },
  ]}
  logo="Linear Design"
  actions={
    <Button variant="primary">始める</Button>
  }
/>`}
              </pre>
            </Card>
          </div>

          {/* Theme Information */}
          <div style={componentSectionStyles}>
            <h2 style={componentTitleStyles}>テーマ情報</h2>
            <div style={demoGridStyles}>
              <Card style={demoCardStyles}>
                <h3 style={{ marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>カラーパレット</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: theme.spacing.sm }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      width: '100%', 
                      height: '60px', 
                      backgroundColor: theme.colors.primary.brand, 
                      borderRadius: theme.borderRadius.md,
                      marginBottom: theme.spacing.xs 
                    }}></div>
                    <span style={{ fontSize: theme.typography.fontSize.xs, color: theme.colors.text.secondary }}>Brand</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      width: '100%', 
                      height: '60px', 
                      backgroundColor: theme.colors.status.success, 
                      borderRadius: theme.borderRadius.md,
                      marginBottom: theme.spacing.xs 
                    }}></div>
                    <span style={{ fontSize: theme.typography.fontSize.xs, color: theme.colors.text.secondary }}>Success</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      width: '100%', 
                      height: '60px', 
                      backgroundColor: theme.colors.status.warning, 
                      borderRadius: theme.borderRadius.md,
                      marginBottom: theme.spacing.xs 
                    }}></div>
                    <span style={{ fontSize: theme.typography.fontSize.xs, color: theme.colors.text.secondary }}>Warning</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      width: '100%', 
                      height: '60px', 
                      backgroundColor: theme.colors.status.error, 
                      borderRadius: theme.borderRadius.md,
                      marginBottom: theme.spacing.xs 
                    }}></div>
                    <span style={{ fontSize: theme.typography.fontSize.xs, color: theme.colors.text.secondary }}>Error</span>
                  </div>
                </div>
              </Card>

              <Card style={demoCardStyles}>
                <h3 style={{ marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>タイポグラフィ</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.sm }}>
                    <div style={{ fontSize: theme.typography.fontSize['3xl'], fontWeight: theme.typography.fontWeight.bold, color: theme.colors.text.primary }}>見出し 1</div>
                    <div style={{ fontSize: theme.typography.fontSize['2xl'], fontWeight: theme.typography.fontWeight.semibold, color: theme.colors.text.primary }}>見出し 2</div>
                    <div style={{ fontSize: theme.typography.fontSize.xl, fontWeight: theme.typography.fontWeight.medium, color: theme.colors.text.primary }}>見出し 3</div>
                    <div style={{ fontSize: theme.typography.fontSize.base, color: theme.colors.text.primary }}>本文テキスト</div>
                    <div style={{ fontSize: theme.typography.fontSize.sm, color: theme.colors.text.secondary }}>小さなテキスト</div>
                  </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComponentsPage;